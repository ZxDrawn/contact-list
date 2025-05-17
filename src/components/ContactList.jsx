import ContactItem from "./ContactItem";

function ContactList({contacts}){
    return(
        <div>
            {contacts.map(contact => (
               <ContactItem 
               key={contact.id}
               name = {contact.name}
               phone = {contact.phone}
               email = {contact.email} 
               />
            )) }
        </div>
    )
}

export default ContactList;