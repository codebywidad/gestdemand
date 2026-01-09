import React, { useEffect, useState } from "react";
import { createDemande, getDemandesByUser, deleteDemande } from "../../api/api";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Demandes = () => {
  const user = useSelector(s => s.user);
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ titre:"", description:"" });

  const fetch = async () => {
    if (!user?.id) return;

    const res = await getDemandesByUser(user.id) || null;

    console.log(`first : ${res}`);

    if(!res || (res  && res.data.length === 0)){
      setList([]);
      return;
    }  
    
    setList(res.data);
    console.log(`second : ${res.data}`);
  };

  useEffect(()=>{ if(user) fetch(); },[user]);

  const handleCreate = async (e) => {
    e.preventDefault();
    await createDemande({ ...form, userId: user.id, statut: "En attente", createdAt: new Date().toISOString() });
    setForm({ titre:"", description:"" });
    fetch();

  };

  const handleCancel = async (id) => { 
    try {
    await deleteDemande(id);
    fetch();
    } catch (error) {
      console.error(
        "Error deleting demande:",
        error.response?.status,
        error.response?.data
      );
    }
  };

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}>
      <h5>Mes Demandes</h5>

      <form onSubmit={handleCreate} className="mb-3">
        <input className="form-control mb-2" placeholder="Titre" value={form.titre} onChange={(e)=>setForm({...form, titre:e.target.value})} required />
        <textarea className="form-control mb-2" placeholder="Description" value={form.description} onChange={(e)=>setForm({...form, description:e.target.value})} required />
        <button className="btn btn-primary">Ajouter</button>
      </form>

      <ul className="list-group">
        {list.map(d => (
          <li className="list-group-item d-flex justify-content-between align-items-start" key={d.id}>
            <div>
              <div style={{ fontWeight:700 }}>{d.titre} <small className="text-muted">({d.statut})</small></div>
              <div>{d.description}</div>
            </div>
            <div>
              {d.statut === "En attente" && <button className="btn btn-sm btn-danger" onClick={()=>handleCancel(d.id)}>Annuler</button>}
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Demandes;