import './App.css';
import { Persons } from './components/Persons';
import { useState } from 'react'; 

function App() {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Ninna Arroye',
      role: 'Diseñadora UX/UI',
      img: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    },
    {
      id: 2,
      name: 'Alejandro Degli Sposti',
      role: 'Arquitecto de Software',
      img: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      id: 3,
      name: 'Jeremmy Sigg',
      role: 'Ingeniero de DevOps',
      img: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    },
  ]);

  return (
    <div className='App'>
      <div className='container'>
        <Persons persons={persons} setPersons={setPersons} /> {/* Corregido */}
      </div>
    </div>
  );
}

export default App;
