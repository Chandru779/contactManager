import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import './components/style.css'
import Header from './components/Header'
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Signup from './components/Signup';

function App() {

 const[contacts , setContacts] = useState([]);

 const addcontactHandler = (contact) =>{
    console.log(contact)
    setContacts([...contacts , contact ])

 }

  return (
    <div>
      <div>
        <Router>
          <Routes>

            <Route path="/" element={<Signup />} />
           
            <Route path="/home" element={[<Header/>,<AddContact addcontactHandler={addcontactHandler}/>,<ContactList contacts={contacts}/>]}  />
    
          </Routes>
        </Router>
       
       
      </div> 
    </div>
  );
}

export default App;
