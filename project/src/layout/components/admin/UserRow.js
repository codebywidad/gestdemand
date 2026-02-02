export default function UserRow({ user, onView, onEdit, onDelete }) {
  return (
    <tr>
      {/* ID with subtle styling */}
      <td className="ps-4">
        <span className="text-muted fw-medium small">#{user.id}</span>
      </td>

      {/* Identity Column */}
      <td>
        <div className="fw-bold text-dark">{user.nom || "N/A"}</div>
      </td>
      <td>
        <div className="text-dark">{user.prenom || "N/A"}</div>
      </td>

      {/* Contact Info */}
      <td>
        <span className="text-muted small">{user.email}</span>
      </td>
      {/* <td>
        <span className="badge bg-light text-dark border fw-normal">
          {user.tel || user.telephone || "—"}
        </span>
      </td> */}

      {/* Theme/Color Preview */}
      <td>
        <div className="d-flex align-items-center gap-2">
          <div 
            className="rounded-circle shadow-sm border" 
            style={{ 
                width: '18px', 
                height: '18px', 
                backgroundColor: user.couleur || '#eee' 
            }}
            title={user.couleur}
          ></div>
          <code className="small text-muted" style={{ fontSize: '0.75rem' }}>
            {user.couleur || 'N/A'}
          </code>
        </div>
      </td>

      {/* Actions with Button Group */}
      <td className="text-center">
        <div className="btn-group shadow-sm" role="group">
          <button 
            className="btn btn-success " 
            onClick={() => onView(user)}
          >
            Détails
          </button>
          <button 
            className="btn btn-dark " 
            onClick={() => onEdit(user)}
          >
            Modifier
          </button>
          <button 
            className="btn btn-danger " 
            onClick={() => onDelete(user.id)}
          >
            Supprimer
          </button>
        </div>
      </td>
    </tr>
  );
}