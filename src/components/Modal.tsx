import React, { useState } from 'react';
import video from '../assets/video/movingmountains.mp4';
import ContactForm from './ContactForm';

type Props = {
  id?: string[];
  open: boolean;
  onClose: () => void;
  contactData?: SelectedContact;
};

type SelectedContact = {
  id?: string;
  first: string;
  last: string;
  email: string;
  phone_number: string;
  address: string;
};

const Modal = (props: Props) => {
  const [contactToUpdate, setContactToUpdate] = useState<SelectedContact>({
    first: '',
    last: '',
    email: '',
    phone_number: '',
    address: '',
  });

  if (!props.open) return <></>;

  return (
    <div
      onClick={props.onClose}
      className="fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-opacity-25"
    >
      <div
        className="modal max-w-800px w-3/5 fixed flex z-1 mt-20 shadow-xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <video autoPlay loop muted className="modal-video-background">
          <source src={video} type="video/mp4" />
        </video>
        <div className="w-full flex flex-col">
          <div className="flex flex-row space-apart">
            <p
              className="flex justify-start m-3 p-2 hover:bg-red-900 opacity-60 text-red-200"
              onClick={props.onClose}
            >
              <i className="fa-solid fa-xmark"></i>
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-3 p-3 text-red-200 mb-5">
            <ContactForm
              id={props.id}
              contactToUpdate={props.contactData}
              onClose={props.onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
