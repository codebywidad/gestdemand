import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function AddUser() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [couleur, setCouleur] = useState("#0066cc");
  const [Pays, setPays] = useState("");
  const [Devise, setDevise] = useState("");
  const [avatar, setAvatar] = useState("");
  const [photo, setPhotos] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confpw, setConf] = useState("");
  const [liste, setListe] = useState([]);
  const [err, setErr] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`https://6935e745fa8e704dafbf386c.mockapi.io/users`)
      .then((res) => {
        setListe(res.data);
      });
  }, [refresh]);

  function handleSignup(e) {
    e.preventDefault();
    setErr("");
    setSuccess(false);

    const existingUser = liste.find((per) => per.email === email);
    if (existingUser) {
      setErr("Cet email existe déjà.");
      return;
    }

    if (pw !== confpw) {
      setErr("Les mots de passe ne correspondent pas.");
      return;
    }

    const newUser = {
      nom, prenom, age, pseudo, couleur,
      Pays, Devise, avatar, photo, email,
      MotDePasse: pw,
    };

    axios
      .post("https://6935e745fa8e704dafbf386c.mockapi.io/users", newUser)
      .then(() => {
        setSuccess(true);
        setRefresh(!refresh);
        // Optional: clear form
      })
      .catch(() => {
        setErr("Erreur lors de la création du compte.");
      });
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
        <h2 className="mb-0">Ajouter un Utilisateur</h2>
      </div>

      <div className="card shadow-sm border-0 rounded-3">
        <div className="card-header bg-light py-3">
          <h5 className="card-title mb-0 text-secondary">Formulaire d'inscription</h5>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSignup}>
            <div className="row g-3">
              {/* Row 1 */}
              <div className="col-md-6">
                <label className="form-label fw-bold small">Nom</label>
                <input type="text" className="form-control bg-light" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small">Prénom</label>
                <input type="text" className="form-control bg-light" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
              </div>

              {/* Row 2 */}
              <div className="col-md-6">
                <label className="form-label fw-bold small">Pseudo</label>
                <input type="text" className="form-control bg-light" placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small">Âge</label>
                <input type="number" className="form-control bg-light" placeholder="Âge" value={age} onChange={(e) => setAge(e.target.value)} />
              </div>

              {/* Row 3 */}
              <div className="col-12">
                <label className="form-label fw-bold small">Email</label>
                <input type="email" className="form-control bg-light" placeholder="exemple@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              {/* Row 4 */}
              <div className="col-md-6">
                <label className="form-label fw-bold small">Mot de passe</label>
                <input type="password" className="form-control bg-light" placeholder="••••••••" value={pw} onChange={(e) => setPw(e.target.value)} required />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small">Confirmer mot de passe</label>
                <input type="password" className="form-control bg-light" placeholder="••••••••" value={confpw} onChange={(e) => setConf(e.target.value)} required />
              </div>

              {/* Row 5 */}
              <div className="col-md-6">
                <label className="form-label fw-bold small">Pays</label>
                <input type="text" className="form-control bg-light" placeholder="Pays" value={Pays} onChange={(e) => setPays(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small">Devise</label>
                <input type="text" className="form-control bg-light" placeholder="MAD, EUR, USD..." value={Devise} onChange={(e) => setDevise(e.target.value)} />
              </div>

              {/* Row 6 */}
              <div className="col-md-6">
                <label className="form-label fw-bold small">Lien Photo</label>
                <input type="text" className="form-control bg-light" placeholder="URL Photo" value={photo} onChange={(e) => setPhotos(e.target.value)} />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold small">Lien Avatar</label>
                <input type="text" className="form-control bg-light" placeholder="URL Avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
              </div>

              {/* Row 7 */}
              <div className="col-12">
                <label className="form-label fw-bold small">Couleur Préférée</label>
                <input type="color" className="form-control form-control-color w-100 shadow-sm border-0" value={couleur} onChange={(e) => setCouleur(e.target.value)} />
              </div>
            </div>

            {/* Notifications */}
            {err && <div className="alert alert-danger mt-4 py-2 small">{err}</div>}
            {success && <div className="alert alert-success mt-4 py-2 small">Compte créé avec succès !</div>}

            <div className="mt-4">
              <button type="submit" className="btn btn-primary px-5 py-2 fw-bold shadow-sm">
                Créer l'utilisateur
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}