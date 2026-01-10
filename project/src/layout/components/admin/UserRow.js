export default function UserRow({ user, onView, onEdit, onDelete }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.nom}</td>
      <td>{user.prenom}</td>
      <td>{user.email}</td>
      <td>{user.telephone}</td>
      <td>
        <span 
          className="color-preview"
          style={{ backgroundColor: user.couleur }}
        ></span>
      </td>
      <td>
        <button
          onClick={() => onView(user)}
          className="btn btn-info btn-sm me-1"
        >
          Détails
        </button>
        <button
          onClick={() => onEdit(user)}
          className="btn btn-success btn-sm me-1"
        >
          Modifier
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="btn btn-danger btn-sm"
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
}
