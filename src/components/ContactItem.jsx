import "./ContactItem.css";

function ContactItem({name, phone, email}){

    return(
    <div className="contact-card">
        <h2>{name}</h2>
        <p>📱{phone}</p>
        <p>{email}</p>
        <div className="btns">
        <button className="btnEditar">Editar</button>
        <button className="btnDeletar">Deletar</button>
        </div>
    </div>
)
}

export default ContactItem;