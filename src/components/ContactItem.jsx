import "./ContactItem.css";

function ContactItem({ name, phone, email, onDelete, id, onEdit }) {
  return (
    <div className="contact-card">
      <h2>{name}</h2>
      <p>📱{phone}</p>
      <p>{email}</p>
      <div className="btns">
        <button className="btnEditar" onClick={onEdit}>
          Editar
        </button>
        <button className="btnDeletar" onClick={() => onDelete(id)}>
          Deletar
        </button>
      </div>
    </div>
  );
}

export default ContactItem;
