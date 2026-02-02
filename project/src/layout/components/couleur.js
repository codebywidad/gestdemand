import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../redux/userreducer";

export default function Couleur() {
  const { previewColor, setPreviewColor } = useOutletContext();
  const user = useSelector((state) => state.USER.user);
  const dispatch = useDispatch();

  const isOldEnough = user.age >= 15;

  return (
    <div className="container mt-4">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
        <div>
          <h2 className="mb-0 fw-bold">Personnalisation</h2>
          <p className="text-muted small mb-0">Configurez l'apparence de votre interface.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-header bg-light py-3">
              <h5 className="card-title mb-0 text-secondary">Couleur du Thème</h5>
            </div>
            <div className="card-body p-4 text-center">
              {isOldEnough ? (
                <>
                  <p className="text-muted mb-4">
                    Choisissez une couleur pour personnaliser votre en-tête et vos accents.
                  </p>
                  
                  <div className="mb-4 d-flex justify-content-center align-items-center gap-3">
                    <input
                      type="color"
                      className="form-control form-control-color border-0 shadow-sm"
                      id="colorPicker"
                      value={previewColor}
                      title="Choisir votre couleur"
                      onChange={(e) => setPreviewColor(e.target.value)}
                      style={{ width: "100px", height: "100px", padding: "5px" }}
                    />
                    <div className="text-start">
                      <label htmlFor="colorPicker" className="form-label fw-bold mb-0">Code Couleur</label>
                      <h4 className="font-monospace text-primary mb-0">{previewColor.toUpperCase()}</h4>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary w-100 py-2 fw-bold shadow-sm"
                    style={{ backgroundColor: "#0066cc" }}
                    onClick={() => {
                      dispatch(changeColor(previewColor));
                    }}
                  >
                    Confirmer le changement
                  </button>
                </>
              ) : (
                <div className="py-4 text-center">
                   <div className="display-1 mb-3">🎨</div>
                   <h3 className="fw-bold">Votre couleur est</h3>
                   <div className="badge rounded-pill px-4 py-2 fs-4 shadow-sm" style={{backgroundColor: previewColor}}>
                        {previewColor}
                   </div>
                   <p className="text-muted mt-3 italic">
                     Vous devez avoir 15 ans ou plus pour modifier votre thème.
                   </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Visual Preview Section */}
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="card border-0 shadow-sm bg-light h-100 d-flex align-items-center justify-content-center p-5 text-center">
             <div 
               className="rounded-circle shadow-lg mb-3" 
               style={{ width: "120px", height: "120px", backgroundColor: previewColor, transition: "0.3s" }}
             ></div>
             <h5 className="fw-bold">Aperçu en direct</h5>
             <p className="small text-muted">Voici comment votre couleur d'accent apparaîtra sur les bordures et les boutons.</p>
          </div>
        </div>
      </div>
    </div>
  );
}