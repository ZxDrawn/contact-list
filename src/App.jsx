import "./App.css";
import { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

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

  function addContact(newContact) {
    fetch("http://localhost:3001/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setContacts([...contacts, data]);
        setShowForm(false); //Esconde o form e depois de adicionar
      })
      .catch(function (error) {
        console.error("Erro ao adicionar contato: ", error);
      });
  }

  // Aqui ele utiliza o id do item a ser deletado e utilizando a
  function deleteContact(id) {
    fetch(`http://localhost:3001/contacts/${id}`, {
      method: "DELETE",
    })
      .then(function (response) {
        if (response.ok) {
          setContacts(contacts.filter((contact) => contact.id !== id));
        } else {
          console.error("Erro ao deletar contato!");
        }
      })
      .catch(function (error) {
        console.error("Erro na requisição: ", error);
      });
  }

  function handleEdit(contact) {
    setEditingContact(contact);
  }

  function updateContact(updatedContact) {
    fetch(`http://localhost:3001/contacts/${updatedContact.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedList = contacts.map((contact) =>
          contact.id === data.id ? data : contact
        );
        setContacts(updatedList);
        setEditingContact(null);
      })
      .catch((err) => console.error("Erro ao editar contato:", err));
  }

  return (
    <div className="container">
      <h1>Agenda de Contatos</h1>
      {!showForm && (
        <button onClick={() => setShowForm(true)} id="Novo Contato">
          {" "}
          Novo Contato{" "}
        </button>
      )}
      {showForm && (
        <ContactForm onAdd={addContact} onClose={() => setShowForm(false)} />
      )}
      <ContactList
        contacts={contacts}
        onDelete={deleteContact}
        onEdit={handleEdit}
      />
      {editingContact && (
        <ContactForm
          initialData={editingContact}
          onAdd={updateContact}
          onClose={() => setEditingContact(null)}
        />
      )}
    </div>
  );
}

export default App;
