import React from 'react'
import Contactlist from '../pure/ContactList'

const Contacts = () => {

  const contactsExample = {
    nombre: 'German',
    apellido: 'Gines',
    email: 'german@gmail.com',
    conectado: true    
  }

  return (
    <>  
      <Contactlist 
        contacts={contactsExample}
      />
    </>
  )
}

export default Contacts
