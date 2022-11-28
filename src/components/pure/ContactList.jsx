import React from 'react'

const ContactList = ( { contacts } ) => {
  return (
    <div>
      <h2>{contacts.nombre}</h2>
      {contacts.conectado ? 
        <p>Contacto en Línea</p>
        : <p>Contacto No Disponible</p>
      }
    </div>
  )
}

export default ContactList
