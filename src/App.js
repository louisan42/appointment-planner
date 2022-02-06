import React,{useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
 
 const[contacts,setContacts] = useState([]);
 const[appointments, setAppointments] = useState([])


  const addNewContact = (name,phoneNum,email)=>{
    const contact = {
      name: name,
      phoneNumber: phoneNum,
      email: email
    };
    setContacts([...contacts,contact]);
  
   };

  const addNewAppointment = (title,contact,date,time)=>{
    const appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };
    setAppointments([...appointments,appointment]);
  
   };
  
    const ROUTES = {
      CONTACTS: "/contacts",
      APPOINTMENTS: "/appointments",
    };
  

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts = {contacts} addContact = {addNewContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments = {appointments} contacts = {contacts} addAppointment = {addNewAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
