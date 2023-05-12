import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({children}: Props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false) 

  const signInOnClick = async () => {
    setLoading(true)
    try {
      const response = await signInWithPopup(auth, Providers.google);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  }

  useEffect(() => {
    const auth_state = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setMessage("You must be signed in to access this page.")
      } else {
        setMessage('')
        navigate('/Dashboard');
      }
    });
    return () => auth_state();
  }, [auth, navigate]);
  
  if (message) {
    return (
        <div className='p-10'>
        <div className='alert alert-warning text-red-900 mt-20'>{message}</div>
        <button className='bg-red-900 opacity-50 hover:bg-red-200 text-red-200 font-semibold py-2 px-4 rounded shadow' onClick={signInOnClick}>Sign in</button>
        {loading ? <div>Loading...</div> : null}
      </div>
    )
  }

  return <>{children}</>
}

export default AuthChecker