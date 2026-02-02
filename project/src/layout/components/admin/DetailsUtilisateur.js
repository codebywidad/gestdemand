export default function DetailsUtilisateur({ user, onClose }) {
  if (!user) return null;

  return (
    <div 
      className="modal fade show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div 
        className="modal-dialog modal-dialog-centered" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content border-0 shadow-lg rounded-4">
          
          {/* Header with Background Accent */}
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title fw-bold text-dark">Détails du Profil</h5>
            <button type="button" className="btn-close shadow-none" onClick={onClose}></button>
          </div>

          <div className="modal-body text-center py-4">
            {/* User Profile Visual */}
            <div className="position-relative d-inline-block mb-3">
              <div 
                className="rounded-circle border border-4 shadow-sm d-flex align-items-center justify-content-center bg-light"
                style={{ 
                  width: '100px', 
                  height: '100px', 
                  borderColor: `${user.couleur} !important`,
                  fontSize: '2.5rem',
                  color: user.couleur 
                }}
              >
                {user.photo ? (
                  <img 
                    src={user.photo} 
                    alt="profile" 
                    className="rounded-circle" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  user.nom?.[0]
                )}
              </div>
            </div>

            <h4 className="fw-bold mb-1">{user.prenom} {user.nom}</h4>
            <p className="text-muted small mb-4"> Utilisateur Plateforme #{user.id}</p>

            {/* Information Grid */}
            <div className="row g-3 text-start bg-light rounded-3 p-3 mx-1">
              <div className="col-6">
                <label className="text-muted small text-uppercase fw-bold" style={{ fontSize: '0.65rem' }}>Email</label>
                <div className="text-dark text-truncate small">{user.email}</div>
              </div>
              <div className="col-6">
                <label className="text-muted small text-uppercase fw-bold" style={{ fontSize: '0.65rem' }}>Téléphone</label>
                <div className="text-dark small">{user.telephone || user.tel || "Non défini"}</div>
              </div>
              <div className="col-6">
                <label className="text-muted small text-uppercase fw-bold" style={{ fontSize: '0.65rem' }}>Pseudo</label>
                <div className="text-dark small">@{user.pseudo || "N/A"}</div>
              </div>
              <div className="col-6">
                <label className="text-muted small text-uppercase fw-bold" style={{ fontSize: '0.65rem' }}>Thème Préféré</label>
                <div className="d-flex align-items-center gap-2">
                  <div 
                    className="rounded-circle border shadow-sm" 
                    style={{ width: '14px', height: '14px', backgroundColor: user.couleur }}
                  ></div>
                  <span className="small font-monospace">{user.couleur}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer border-0 pt-0">
            <button 
              type="button" 
              className="btn btn-primary w-100 rounded-pill fw-bold py-2 shadow-sm" 
              onClick={onClose}
            >
              Fermer l'aperçu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}