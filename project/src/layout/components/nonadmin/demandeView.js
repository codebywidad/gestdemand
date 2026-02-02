import { useDispatch, useSelector } from "react-redux";
import { fetchDemande } from "../../../redux/userreducer";
import { useEffect } from "react";

export default function ViewDemande() {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.USER.user.id);
    useEffect(() => {
       dispatch(fetchDemande(userId)); 
    }, [userId]);
    
    const liste = useSelector((state) => state.USER.demande) || [];

    const getStatusBadge = (status) => {
        switch (status) {
            case "pending":
                return <span className="badge bg-warning text-dark">En attente</span>;
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
            {/* Page Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
                <div>
                    <h2 className="mb-0 fw-bold">Mes Demandes</h2>
                    <p className="text-muted small mb-0">Suivez l'état de vos requêtes envoyées</p>
                </div>
            </div>

            {/* Table Card */}
            <div className="card shadow-sm border-0 rounded-3">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4 py-3">Titre</th>
                                    <th className="py-3">Description</th>
                                    <th className="py-3 text-center">Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                {liste.length > 0 ? (
                                    liste.filter(el => el.statu === "pending" || el.statu === "approved" || el.statu === "rejected").map((el) => (
                                        <tr key={el.id}>
                                            <td className="ps-4 fw-bold text-dark">{el.titre}</td>
                                            <td className="text-muted">{el.description}</td>
                                            <td className="text-center">
                                                {getStatusBadge(el.statu)}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center py-5 text-muted">
                                            Vous n'avez pas encore envoyé de demandes.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}