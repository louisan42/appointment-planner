import React from "react";

export const ContactForm = ({
  name,
  setCurrentName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={ (e)=> setCurrentName(e.target.value)} required placeholder="Name" />
      <br />
      <input type="tel" name="phone " value={phone} onChange={(e)=> setPhone(e.target.value)} required placeholder="Phone (###-###-####)" 
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"  
      />
      <br />
      <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder="email" />
      <br />
      <input type="submit" value= "Add Contact" /> 
    </form>
  );
};
