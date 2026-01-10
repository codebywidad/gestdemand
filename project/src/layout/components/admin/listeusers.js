import { useEffect, useState } from "react";
import { adminfetchusers } from "../../../redux/adminreducer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import DetailsUtilisateur from "./DetailsUtilisateur";
import ModifierUtilisateur from "./ModifierUtilisateur";
import UserRow from "./UserRow";
import "./Users.css"; // Fichier CSS pour les styles

export default function Users() {
  const dispatch = useDispatch();
  const listeusers = useSelector(state => state.ADMIN.listeusers);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(adminfetchusers());
  }, [dispatch]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listeusers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(listeusers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // CRUD operations
  const handleView = (user) => {
    setSelectedUser(user);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = async (userId, formData) => {
    try {
      await axios.put(
        `https://6935e745fa8e704dafbf386c.mockapi.io/users/${userId}`,
        formData
      );
      dispatch(adminfetchusers());
      setEditingUser(null);
    } catch (error) {
      console.error("Erreur lors de la modification:", error);
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      try {
        await axios.delete(
          `https://6935e745fa8e704dafbf386c.mockapi.io/users/${userId}`
        );
        dispatch(adminfetchusers());
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
      }
    }
  };

  return (
    <div className="container">
      <h2>Liste des Utilisateurs</h2>
      
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Couleur</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((user) => (
                <UserRow
                  key={user.id}
                  user={user}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  Aucun utilisateur trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <div className="pagination-info">
            Page {currentPage} sur {totalPages} ({listeusers.length} utilisateurs)
          </div>
          
          <nav>
            <ul className="pagination">
              <li className={currentPage === 1 ? "disabled" : ""}>
                <button 
                  className="btn btn-sm btn-secondary"
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
                    <li key={pageNumber}>
                      <button
                        className={currentPage === pageNumber ? "btn btn-sm btn-primary" : "btn btn-sm btn-outline-secondary"}
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
                  return <li key={pageNumber}><span>...</span></li>;
                }
                return null;
              })}

              <li className={currentPage === totalPages ? "disabled" : ""}>
                <button
                  className="btn btn-sm btn-secondary"
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

      {/* Modals */}
      {selectedUser && (
        <DetailsUtilisateur
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}

      {editingUser && (
        <ModifierUtilisateur
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
