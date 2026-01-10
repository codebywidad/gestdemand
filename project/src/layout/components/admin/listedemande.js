import { useEffect, useState } from "react";
import { adminfetchdemande } from "../../../redux/adminreducer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function LDemande() {
  const dispatch = useDispatch();
  const listedemandes = useSelector(state => state.ADMIN.listedemandes);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all"); // all, pending, approved, rejected
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(adminfetchdemande());
  }, [dispatch]);

  // Filter demandes by status
  const filteredDemandes = listedemandes.filter(demande => {
    if (filter === "all") return true;
    if (filter === "pending") return demande.statu === "pending";
    if (filter === "approved") return demande.statu === "approved";
    if (filter === "rejected") return demande.statu === "rejected";
    return true;
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDemandes.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredDemandes.length / itemsPerPage);

  // Count by status
  const counts = {
    all: listedemandes.length,
    pending: listedemandes.filter(d => d.statu === "pending").length,
    approved: listedemandes.filter(d => d.statu === "approved").length,
    rejected: listedemandes.filter(d => d.statu === "rejected").length
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleStatusChange = async (demandeId, newStatus) => {
    try {
      await axios.put(
        `https://6935e745fa8e704dafbf386c.mockapi.io/demandes/${demandeId}`,
        { statu: newStatus }
      );
      // Refresh the list
      dispatch(adminfetchdemande());
    } catch (error) {
      console.error("Erreur lors du changement de statut:", error);
    }
  };

  const handleDelete = async (demandeId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette demande ?")) {
      try {
        await axios.delete(
          `https://6935e745fa8e704dafbf386c.mockapi.io/demandes/${demandeId}`
        );
        dispatch(adminfetchdemande());
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
      }
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case "pending":
        return <span className="badge bg-warning">En attente</span>;
      case "approved":
        return <span className="badge bg-success">Approuvée</span>;
      case "rejected":
        return <span className="badge bg-danger">Rejetée</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Gestion des Demandes</h2>
      
      {/* Filter Tabs */}
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button 
            className={`nav-link ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            Toutes ({counts.all})
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${filter === "pending" ? "active" : ""}`}
            onClick={() => handleFilterChange("pending")}
          >
            En attente ({counts.pending})
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${filter === "approved" ? "active" : ""}`}
            onClick={() => handleFilterChange("approved")}
          >
            Approuvées ({counts.approved})
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${filter === "rejected" ? "active" : ""}`}
            onClick={() => handleFilterChange("rejected")}
          >
            Rejetées ({counts.rejected})
          </button>
        </li>
      </ul>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titre</th>
              <th>Description</th>
              <th>User ID</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((demande) => (
                <tr key={demande.id}>
                  <td>{demande.id}</td>
                  <td>{demande.titre}</td>
                  <td>{demande.description}</td>
                  <td>{demande.userId}</td>
                  <td>{getStatusBadge(demande.statu)}</td>
                  <td>
                    <div className="btn-group" role="group">
                      {demande.statu !== "approved" && (
                        <button
                          onClick={() => handleStatusChange(demande.id, "approved")}
                          className="btn btn-success btn-sm"
                          title="Approuver"
                        >
                          ✓ Approuver
                        </button>
                      )}
                      {demande.statu !== "rejected" && (
                        <button
                          onClick={() => handleStatusChange(demande.id, "rejected")}
                          className="btn btn-danger btn-sm"
                          title="Rejeter"
                        >
                          ✗ Rejeter
                        </button>
                      )}
                      {demande.statu !== "pending" && (
                        <button
                          onClick={() => handleStatusChange(demande.id, "pending")}
                          className="btn btn-warning btn-sm"
                          title="Remettre en attente"
                        >
                          ⟳ En attente
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(demande.id)}
                        className="btn btn-outline-danger btn-sm"
                        title="Supprimer"
                      >
                        🗑
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Aucune demande trouvée
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="text-muted">
            Page {currentPage} sur {totalPages} ({filteredDemandes.length} demandes)
          </div>
          
          <nav>
            <ul className="pagination mb-0">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button 
                  className="page-link"
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                >
                  Précédent
                </button>
              </li>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? "active" : ""}`}>
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    </li>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return (
                    <li key={pageNumber} className="page-item disabled">
                      <span className="page-link">...</span>
                    </li>
                  );
                }
                return null;
              })}

              <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  Suivant
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}