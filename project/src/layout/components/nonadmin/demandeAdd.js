import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDemande } from "../../../redux/userreducer";

export default function AddDemande() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const id = useSelector((state) => state.USER.user.id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);

    const demande = {
      titre: title,
      description: desc,
      userId: id,
      statu: "pending",
    };

    try {
      await axios.post("https://6935e745fa8e704dafbf386c.mockapi.io/demandes", demande);
      // Ensure your fetchDemande action is properly set up for unwrap or standard dispatch
      await dispatch(fetchDemande(id));

      // Clear form and show success message
      setTitle("");
      setDesc("");
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.log("Error creating demande:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-4">
      {/* Page Header consistent with other pages */}
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
        <div>
          <h2 className="mb-0 fw-bold">Nouvelle Demande</h2>
          <p className="text-muted small mb-0">Remplissez le formulaire pour soumettre une requête au service administratif.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-header bg-light py-3">
              <h5 className="card-title mb-0 text-secondary">Détails de la requête</h5>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handlesubmit}>
                {/* Title Input */}
                <div className="mb-3">
                  <label className="form-label fw-bold small text-uppercase">Titre</label>
                  <input
                    type="text"
                    className="form-control bg-light border-0 py-2"
                    placeholder="Entrez le titre de votre demande"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {/* Description Textarea */}
                <div className="mb-4">
                  <label className="form-label fw-bold small text-uppercase">Description</label>
                  <textarea
                    className="form-control bg-light border-0"
                    rows="5"
                    placeholder="Expliquez votre demande en détail..."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {/* Success Feedback */}
                {showSuccess && (
                  <div className="alert alert-success border-0 py-2 small mb-3">
                    ✓ Votre demande a été envoyée avec succès !
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 fw-bold shadow-sm"
                  disabled={isSubmitting}
                  style={{ backgroundColor: "#0066cc" }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer la demande"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Optional helpful sidebar info */}
        <div className="col-md-4">
            <div className="alert alert-info border-0 shadow-sm">
                <h6 className="fw-bold">Aide</h6>
                <p className="small mb-0">
                    Une fois envoyée, votre demande sera examinée par un administrateur. 
                    Vous pouvez suivre l'avancement dans la section <strong>"Mes demandes"</strong>.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}