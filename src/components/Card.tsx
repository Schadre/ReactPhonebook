import { Contact } from './types'
  
  interface Props {
    data: Contact;
    isSelected: boolean;
    onSelect: (contact: Contact | undefined) => void;
  }
  
  function Card({ data, isSelected, onSelect }: Props) {
    const handleSelect = () => {
      if (isSelected) {
        onSelect(undefined);
      } else {
        onSelect(data);
      }
    };
  
    return (
      <div
        className={`card bg-red-900 opacity-50 ${
          isSelected ? 'border-red-200' : 'border-transparent'
        } hover:border-red-300`}
        style={{ cursor: 'pointer' }}
        onClick={handleSelect}
      >
        <h2 className='text-red-200' style={{ textAlign: 'center' }}>{`${data.first} ${data.last}`}</h2>
        <p className='text-red-200'>{data.email}</p>
        <p className='text-red-200'>{data.phone_number}</p>
        <p className='text-red-200'>{data.address}</p>
      </div>
    );
  }
  
  export default Card;
  