import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.USER.user);

  // Helper to render status badges if the user has a "status" or "role" field
  const getInfoBadge = (key, value) => {
    if (key.toLowerCase() === "status" || key.toLowerCase() === "statu") {
      switch (value) {
        case "active": return <span className="badge bg-success">Actif</span>;
        case "pending": return <span className="badge bg-warning text-dark">En attente</span>;
        default: return <span className="badge bg-secondary">{value}</span>;
      }
    }
    if (key.toLowerCase() === "role") {
      return <span className="badge bg-info text-dark">{value}</span>;
    }
    return String(value);
  };

  return (
    <div className="container mt-4">
      {/* Header section similar to LDemande */}
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
        <h2 className="mb-0">Mon Profil</h2>
        {/* <button className="btn btn-outline-primary btn-sm">
          Modifier les informations
        </button> */}
      </div>

      <div className="row">
        <div className="col-12">
          {/* Card container following the dashboard aesthetic */}
          <div className="card shadow-sm">
            <div className="card-header bg-light py-3">
              <h5 className="card-title mb-0 text-secondary">Informations Générales</h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: "30%" }} className="ps-4">Champ</th>
                      <th className="ps-4">Valeur</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user && Object.entries(user).map(([key, value]) => (
                      value && (
                        <tr key={key}>
                          <td className="ps-4 text-capitalize fw-semibold text-muted">
                            {key.replace(/_/g, ' ')}
                          </td>
                          <td className="ps-4 fw-medium text-dark">
                            {getInfoBadge(key, value)}
                          </td>
                        </tr>
                      )
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <p className="text-muted mt-3 small ps-2">
            * Ces informations sont extraites de votre compte utilisateur sécurisé.
          </p>
        </div>
      </div>
    </div>
  );
}