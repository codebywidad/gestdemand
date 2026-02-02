import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"; // Note: changed to react-router-dom for consistency
import { useDispatch, useSelector } from "react-redux";
import { fetchDemande, login } from "../redux/userreducer";

export default function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [liste, setListe] = useState([]);
    const [err, setErr] = useState("");
    const dispatch = useDispatch();
    const isLog = useSelector((state) => state.USER.isLogged);

    useEffect(() => {
        if (isLog) navigate("/");

        const fetchUsers = async () => {
            try {
                const res = await axios.get("https://6935e745fa8e704dafbf386c.mockapi.io/users");
                setListe(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, [isLog, navigate]);

    function checkemail(e) {
        e.preventDefault();
        const user = liste.find((per) => per.email === email);

        if (!user) {
            setErr("Email non trouvé");
            return;
        }
        if (user.MotDePasse !== pw) {
            setErr("Mot de passe incorrect");
            return;
        }

        setErr("");
        dispatch(login(user));
        dispatch(fetchDemande(user.id));
        navigate("/layout");
    }

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center" 
             >
            <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: "100%", maxWidth: "400px" }}>
                <div className="card-body">
                    <h2 className="text-center mb-4 fw-bold">
                        <Link to="/" className="text-decoration-none text-dark">Se connecter</Link>
                    </h2>
                    
                    <form onSubmit={checkemail}>
                        <div className="mb-3">
                            <label className="form-label small fw-bold text-muted text-uppercase">Email</label>
                            <input type="email" className="form-control form-control-lg bg-light border-0" 
                                   placeholder="nom@exemple.com" value={email} required 
                                   onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label small fw-bold text-muted text-uppercase">Mot de passe</label>
                            <input type="password" className="form-control form-control-lg bg-light border-0" 
                                   placeholder="••••••••" value={pw} required 
                                   onChange={(e) => setPw(e.target.value)} />
                        </div>

                        {err && (
                            <div className="alert alert-danger py-2 small text-center border-0 mb-3">
                                {err}
                            </div>
                        )}

                        <button type="submit" className="btn  w-100 py-2 fw-bold shadow-sm"
                                style={{ backgroundColor: "#494949", color: "#fff" }}>
                            Se connecter
                        </button>
                    </form>

                    <p className="text-center mt-4 mb-0 text-muted">
                        Pas de compte ? <Link to="/auth/signup" className="fw-bold text-dark text-decoration-none">Créer un</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}