import { useState } from "react";
import useGetData from "../custom-hooks/FetchData";
import { server_calls } from "../api/server";
import Modal from "./Modal";
import Card from "./Card";
import { Contact } from './types'

export interface SelectedContact {
  id?: string;
  first?: string;
  last?: string;
  email?: string;
  phone_number?: string;
  address?: string;
}

function DataCard() {
  const [open, setOpen] = useState(false);
  const { contactData, handleDataFetch } = useGetData();
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>(); // Updated this line

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  }; 

  const handleDelete = () => {
    if (selectedContact && selectedContact.id) {
      server_calls.delete(selectedContact.id);
      handleDataFetch();
      setTimeout( () => {window.location.reload() }, 500);
    } else {
      console.error("no contact selected for deletion");
    }
  }

  const handleCardSelection = (contact: Contact | undefined) => {
    if (contact) {
      setSelectedContact(contact);
      handleOpenModal();
    } else {
      console.error("No contact selected");
    }
  };
  

  return (
    <>
      <Modal 
        id={ selectedContact && selectedContact.id ? [selectedContact.id] : undefined }
        open={ open } 
        onClose={ handleCloseModal }
        contactData={ selectedContact }
      />
      <div className='flex flex-row items-center justify-center'>
        <div className='flex space-x-4' style={{ marginTop: '30px' }}>
          <button className='flex items-center px-3 py-2 text-red-900 text-opacity-60 hover:text-red-50' 
          onClick={() => handleOpenModal()}>
            <i className='fa-solid fa-plus fa-2xl'
             title='Create'
             style={{ fontFamily: 'Times New Roman' }}> Create </i>
          </button>
        </div>
      </div>
      <div className={open ? 'hidden' : 'container mx-10 my-5 flex flex-col'} 
      style={{ height: 400, width: '100%' }}>
        <h2 className='p-3 bg-red-900 text-red-100 text-center opacity-50 my-2 mt-10 mb-10'>
          My Contacts
        </h2>
        <div className='flex flex-wrap justify-center'>
          {contactData.map((contact: Contact) => (
            <Card
              key={contact.id}
              data={contact}
              isSelected={selectedContact?.id === contact.id}
              onSelect={handleCardSelection}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DataCard;
