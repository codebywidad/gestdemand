import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/userreducer";
import { useDispatch, useSelector } from "react-redux";

export default function Signup() {
    // ... (Your existing state hooks remain the same)
    const [nom, setNom] = useState(""); const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState(""); const [pseudo, setPseudo] = useState("");
    const [couleur, setCouleur] = useState("#dfdfdf"); const [Pays, setPays] = useState("");
    const [Devise, setDevise] = useState(""); const [avatar, setAvatar] = useState("");
    const [photo, setPhotos] = useState(""); const [email, setEmail] = useState("");
    const [pw, setPw] = useState(""); const [confpw, setConf] = useState("");
    const [liste, setListe] = useState([]); const [err, setErr] = useState("");
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate(); const dispatch = useDispatch();
    const isLog = useSelector((state) => state.USER.isLogged);

    useEffect(() => {
        if (isLog) navigate("/");
        axios.get(`https://6935e745fa8e704dafbf386c.mockapi.io/users`)
            .then((res) => setListe(res.data));
    }, [refresh, isLog, navigate]);

    function handleSignup(e) {
        e.preventDefault();
        if (liste.find((per) => per.email === email)) { setErr("L'email existe déjà"); return; }
        if (pw !== confpw) { setErr("Les mots de passe ne correspondent pas"); return; }

        const newUser = { nom, prenom, age, pseudo, couleur, Pays, Devise, avatar, photo, email, MotDePasse: pw };

        axios.post("https://6935e745fa8e704dafbf386c.mockapi.io/users", newUser)
            .then(() => {
                dispatch(login(newUser));
                navigate("/layout");
            })
            .catch(() => setErr("Erreur lors de la création"));
    }

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center py-5"
        >
            <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: "100%", maxWidth: "600px" }}>
                <div className="card-body">
                    <h2 className="text-center mb-4 fw-bold text-dark">Créer un compte</h2>

                    <form onSubmit={handleSignup}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control bg-light border-0" placeholder="Nom" required onChange={(e) => setNom(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control bg-light border-0" placeholder="Prénom" required onChange={(e) => setPrenom(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control bg-light border-0" placeholder="Pseudo" required onChange={(e) => setPseudo(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <input type="number" className="form-control bg-light border-0" placeholder="Âge" required onChange={(e) => setAge(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control bg-light border-0" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <input type="password" className="form-control bg-light border-0" placeholder="Mot de passe" required onChange={(e) => setPw(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <input type="password" className="form-control bg-light border-0" placeholder="Confirmation" required onChange={(e) => setConf(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control bg-light border-0" placeholder="Pays" onChange={(e) => setPays(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control bg-light border-0" placeholder="Devise" onChange={(e) => setDevise(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <label className="form-label small fw-bold text-muted mb-1">Thème de couleur</label>
                                <input type="color" className="form-control form-control-color w-100 border-0" value={couleur} onChange={(e) => setCouleur(e.target.value)} />
                            </div>
                        </div>

                        {err && <div className="alert alert-warning py-2 small mt-3 text-center">{err}</div>}

                        <button type="submit" className="btn w-100 py-2 fw-bold mt-4 shadow-sm" style={{ backgroundColor: "#494949", color: "#fff" }}>
                            S'inscrire
                        </button>
                    </form>

                    <p className="text-center mt-3 mb-0 text-muted">
                        Déjà un compte ? <Link to="/auth/signin" className="fw-bold text-dark text-decoration-none">Se connecter</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}