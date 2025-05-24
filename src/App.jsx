import './App.css'
import { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
import ContactForm from './components/ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setContacts(data);
      })
      .catch(function (error) {
        console.error("Erro ao buscar contatos:", error);
      });
  }, []);

  function addContact(newContact){
    fetch("http://localhost:3001/contacts", {
      method: 'POST', 
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(newContact), 
    }).then(function(response){
      return response.json();
    }).then(function(data){
      setContacts([...contacts, data]);
      setShowForm(false); //Esconde o form e depois de adicionar
    }).catch(function(error){
      console.error("Erro ao adicionar contato: ", error);
    })
    ;
  }

  return (
    <div className="container">
      <h1>Agenda de Contatos</h1>
      {!showForm &&(
        <button onClick={()=> setShowForm(true)}>Novo Contato</button>
      )}
      {showForm &&(
        <ContactForm onAdd = {addContact} onClose={()=> setShowForm(false)}/>
      )}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

