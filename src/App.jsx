import './App.css'
import ContactItem from './components/ContactItem';

function App() {
  const contacts = [
    {id: 1, name: "João", phone: "(69) 9887-4455", mail: " email@gmail.com"},
    {id: 1, name: "João", phone: "(69) 9887-4456", mail: " email@gmail.com"},
    {id: 1, name: "João", phone: "(69) 9887-4457", mail: " email@gmail.com"}
  ];
  return(
    <div>
      <h1>Agenda de Contatos</h1>
      <ContactItem></ContactItem>
      <ContactItem></ContactItem>
    </div>
  )
}

export default App
