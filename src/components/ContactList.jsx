import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete, onEdit }) {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          id={contact.id}
          onDelete={onDelete}
          onEdit={() => onEdit(contact)}
        />
      ))}
    </div>
  );
}

export default ContactList;
