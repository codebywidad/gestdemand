import { useState } from "react";

export default function ModifierUtilisateur({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nom: user.nom || "",
    prenom: user.prenom || "",
    email: user.email || "",
    telephone: user.telephone || "",
    couleur: user.couleur || "#000000"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user.id, formData);
  };

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
          
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title fw-bold">Modifier l'Utilisateur</h5>
            <button type="button" className="btn-close shadow-none" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              <div className="row g-3">
                {/* Nom */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">Nom</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="form-control bg-light border-0 py-2"
                    required
                  />
                </div>

                {/* Prénom */}
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">Prénom</label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    className="form-control bg-light border-0 py-2"
                    required
                  />
                </div>

                {/* Email */}
                <div className="col-12">
                  <label className="form-label small fw-bold text-secondary">Adresse Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control bg-light border-0 py-2"
                    required
                  />
                </div>

                {/* Téléphone */}
                <div className="col-md-7">
                  <label className="form-label small fw-bold text-secondary">Téléphone</label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="form-control bg-light border-0 py-2"
                    placeholder="+212 ..."
                  />
                </div>

                {/* Couleur Picker */}
                <div className="col-md-5">
                  <label className="form-label small fw-bold text-secondary">Couleur Thème</label>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="color"
                      name="couleur"
                      value={formData.couleur}
                      onChange={handleChange}
                      className="form-control form-control-color border-0 bg-light rounded-circle"
                      style={{ width: '45px', height: '45px', padding: '5px' }}
                    />
                    <code className="text-muted small">{formData.couleur}</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer border-0 p-4 pt-0 d-flex gap-3">
              <button 
                type="button" 
                onClick={onClose} 
                className="btn btn-light flex-fill rounded-pill fw-bold py-2"
              >
                Annuler
              </button>
              <button 
                type="submit" 
                className="btn btn-primary flex-fill rounded-pill fw-bold py-2 shadow-sm"
              >
                Sauvegarder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}