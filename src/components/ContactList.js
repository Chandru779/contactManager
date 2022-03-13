import React from 'react';
import contactImage from '../contactImage.png';
import {FaTrashAlt, FontAwesomee} from  'react-icons/fa'


const ContactList = (props) =>{
    
    const renderContacts = props.contacts.map((contact)=> {
           return(
               <div className="underline">
                   <img className="img" src={contactImage} alt="contactImage" height="50px" width="50px" />
                   <p className="name">{contact.name}</p>
                   <FaTrashAlt className="trash-icon"></FaTrashAlt>
                   <p className="email">{contact.email}</p>
                   <p className="number">{contact.number}</p>
                            
               </div>
           );
        })
    
    return(
        <div className="contactList">
           {renderContacts}
        </div>
       
    );
}

export default ContactList
