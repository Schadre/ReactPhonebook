import Input from './Input';
import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useDispatch, useStore } from 'react-redux';
import { chooseFirst, chooseLast, chooseEmail, choosePhone, chooseAddress } from '../redux/slices/RootSlice';
import { SelectedContact } from './DataCard';
import { useEffect } from 'react';

interface ContactFormProps {
  id?: string[];
  contactToUpdate?: SelectedContact;
  onClose?: () => void;
  setContactToUpdate?: (contact: SelectedContact) => void;
}

const ContactForm = (props: ContactFormProps) => {
  const { register, handleSubmit, setValue } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${data.name} ${props.id}`)
      setTimeout(() => { window.location.reload() }, 500);
      event.target.reset();
    } else {
      dispatch(chooseFirst(data.first));
      dispatch(chooseLast(data.last));
      dispatch(chooseEmail(data.email));
      dispatch(choosePhone(data.phone_number));
      dispatch(chooseAddress(data.address));

      server_calls.create(store.getState())
      setTimeout(() => { window.location.reload() }, 500);
    }
  }

  const handleDelete = () => {
    if (props.id && props.id.length > 0) {
      server_calls.delete(props.id[0]);
      console.log(`Deleted: ${props.id}`)
      setTimeout(() => { window.location.reload() }, 500);
    }
  }

  useEffect(() => {
    if (props.contactToUpdate) {
      setValue('first', props.contactToUpdate.first);
      setValue('last', props.contactToUpdate.last);
      setValue('email', props.contactToUpdate.email);
      setValue('phone_number', props.contactToUpdate.phone_number);
      setValue('address', props.contactToUpdate.address);
    }
  }, [props.contactToUpdate]);

  return (
    <div>
        <form className='p-10' onSubmit={handleSubmit(onSubmit)}>
                <div className='p-5'>
                  <label htmlFor="First Name">Contact First Name</label>
                  <Input {...register('first')} name='first' placeholder="First Name"/>
                </div>  
                <div className='p-5'>
                  <label htmlFor="Last Name">Contact Last Name</label>
                  <Input {...register('last')} name='last' placeholder="Last Name"/>
                </div>
                <div className='p-5'>
                  <label htmlFor="Email">Contact Email</label>
                  <Input {...register('email')} name='email' placeholder="Email"/>
                </div>
                <div className='p-5'>
                  <label htmlFor="Phone Number">Contact Phone Number</label>
                  <Input {...register('phone_number')} name='phone_number' placeholder="Phone Number"/>
                </div>
                <div className='p-5'>
                  <label htmlFor="Address">Contact Address</label>
                  <Input {...register('address')} name='address' placeholder="Street Address"/>
                </div>
                <div className='flex p-20'>
                <button
                  className="bg-red-900 opacity-50 hover:bg-red-200 text-red-200 font-semibold py-2 px-4 rounded shadow mr-2"
                  onClick={handleDelete}
                  style={{ zIndex: 1 }}>
                    Delete 
                    </button>
                  <button className="bg-red-900 opacity-50 hover:bg-red-200 text-red-200 font-semibold py-2 px-4 rounded shadow"
                    style={{ zIndex: 1 }}>
                    Submit
                  </button>
                </div>
        </form>
    </div>
  )
}

export default ContactForm;

