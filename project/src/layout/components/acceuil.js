import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDemande } from "../../redux/userreducer";
import { useEffect } from "react";

export default function Acceuil() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.USER.user);
  const userId = user.id;
    useEffect(() => {
       dispatch(fetchDemande(userId)); 
    }, [userId]);
  const demandes = useSelector((state) => state.USER.user.admin ? state.ADMIN.listedemandes : state.USER.demande) ||  [];

  return (
    <div className="container mt-4">
      {/* Welcome Header */}
      <div className="d-flex align-items-center mb-4 border-bottom pb-3">
        <div className="me-3">
            {/* Display user photo if exists, otherwise a placeholder circle with initial */}
            {user.photo ? (
                <img src={user.photo} alt="profile" className="rounded-circle shadow-sm" style={{ width: "64px", height: "64px", objectFit: "cover" }} />
            ) : (
                <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center shadow-sm text-white fw-bold" style={{ width: "64px", height: "64px", fontSize: "1.5rem" }}>
                    {user.prenom?.[0]}{user.nom?.[0]}
                </div>
            )}
        </div>
        <div>
          <h2 className="mb-0 fw-bold text-dark">Bonjour, {user.prenom} {user.nom} !</h2>
          <p className="text-muted mb-0">Ravi de vous revoir sur votre tableau de bord.</p>
        </div>
      </div>

      {/* Stats / Quick Info Row */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-3 bg-white h-100">
            <div className="card-body">
              <h6 className="text-muted text-uppercase small fw-bold">{user.admin ? "Total Des Demandes" : "Mes Demandes"}</h6>
              <div className="d-flex align-items-end justify-content-between">
                <h2 className="mb-0 fw-bold">{demandes.length}</h2>
                <Link to={user.admin ? "/layout/listeDemande" : "/layout/demandes"} className="btn btn-sm btn-light text-primary fw-bold">Voir tout</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-3 bg-white h-100">
            <div className="card-body">
              <h6 className="text-muted text-uppercase small fw-bold">Statut Compte</h6>
              <div className="mt-2">
                <span className={`badge ${user.admin ? 'bg-info' : 'bg-success'} px-3 py-2`}>
                   {user.admin ? 'Administrateur' : 'Utilisateur Standard'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-3 bg-white h-100" style={{borderLeft: `5px solid ${user.couleur || '#0066cc'}`}}>
            <div className="card-body">
              <h6 className="text-muted text-uppercase small fw-bold">Thème Actuel</h6>
              <div className="d-flex align-items-center mt-2">
                <div className="rounded-circle me-2" style={{width: '20px', height: '20px', backgroundColor: user.couleur}}></div>
                <span className="text-dark font-monospace">{user.couleur}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Card */}
      <div className="card border-0 shadow-sm rounded-3">
        <div className="card-body p-4">
          <h5 className="fw-bold mb-3 text-secondary">Actions Rapides</h5>
          <div className="d-flex flex-wrap gap-2">
            <Link to="/layout/profile" className="btn btn-outline-secondary">
              Gérer mon Profil
            </Link>
            {!user.admin && (
                <Link to="/layout/ajouterDemande" className="btn btn-primary shadow-sm">
                   + Nouvelle Demande
                </Link>
            )}
            {user.admin && (
                <Link to="/layout/listeDemande" className="btn btn-primary shadow-sm">
                   Gérer les Demandes
                </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}