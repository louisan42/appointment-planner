import React,{useState,useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm.js';
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = ({contacts,addContact}) => {
  
 const[currentName,setCurrentName] = useState('');
 const[phone,setPhone] = useState('');
 const[email,setEmail] = useState('');
 const[duplicate,setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    
   if(!duplicate){
    addContact(currentName,phone,email);
     setCurrentName("");
     setPhone("");
     setEmail("");
   }
  };

  useEffect(()=>{

      const dupName = contacts.find(contact=>contact.name === currentName);
      dupName !== undefined ? setDuplicate(true) : setDuplicate(false);

  },[contacts,currentName, duplicate])

  return (
    <div>
      <section>
        <h2>Add Contact
          <p>{duplicate ? "Name already exists!" : ""}</p>
        </h2>
        <ContactForm 
          name={currentName}
          setCurrentName = {setCurrentName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles = {contacts} />
      </section>
    </div>
  );
};
