export default  function DetailsUtilisateur({ user, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Détails de l'utilisateur</h3>
        <div className="details-content">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nom:</strong> {user.nom}</p>
          <p><strong>Prénom:</strong> {user.prenom}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Téléphone:</strong> {user.telephone}</p>
          <p>
            <strong>Couleur:</strong> 
            <span 
              className="color-preview"
              style={{ backgroundColor: user.couleur }}
            ></span>
          </p>
        </div>
        <button onClick={onClose} className="btn btn-secondary w-100">
          Fermer
        </button>
      </div>
    </div>
  );
}