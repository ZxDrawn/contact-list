import "./ContactItem.css";

function ContactItem(){
    return(
    <div className="contact-card">
        <h2>Kaiky Vinícius Olivera Nascimento</h2>
        <p>📱(69) 9 9223-0618</p>
        <p>kaiky.vinicius0407@gmail.com</p>
        <div className="btns">
        <button className="btnEditar">Editar</button>
        <button className="btnDeletar">Deletar</button>
        </div>
    </div>
)
}

export default ContactItem;