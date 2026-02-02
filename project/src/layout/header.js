import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userreducer";

export default function Header({ previewColor }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.USER.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/signin");
  };

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light bg-white px-4 py-2"
      style={{
        borderBottom: `3px solid ${previewColor}`,
        boxShadow: `0 4px 12px ${previewColor}22`,
        zIndex: 1050
      }}
    >
      <div className="container-fluid">
        {/* Brand / Logo Area */}
        <div className="navbar-brand fw-bold d-flex align-items-center">
          
          <span className="d-none d-sm-inline">MyDashboard</span>
        </div>

        {/* User Info & Logout Section */}
        <div className="d-flex align-items-center ms-auto">
          <div className="d-flex align-items-center me-3 border-end pe-3">
            <div className="text-end me-2 d-none d-md-block">
              <div className="fw-bold small mb-0" style={{ lineHeight: "1.2" }}>
                {user.prenom} {user.nom}
              </div>
              <small className="text-muted text-uppercase" style={{ fontSize: "0.65rem" }}>
                {user.pseudo}
              </small>
            </div>
            
            {user.photo ? (
              <img 
                src={user.photo} 
                alt="profile" 
                className="rounded-circle border" 
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
            ) : (
              <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center shadow-sm text-white fw-bold" style={{ width: "64px", height: "64px", fontSize: "1.5rem" }}>
                    {user.prenom?.[0]}{user.nom?.[0]}
                </div>
            )}
          </div>

          <button 
            className="btn btn-sm btn-outline-danger rounded-pill px-3 fw-bold"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      </div>
    </nav>
  );
}