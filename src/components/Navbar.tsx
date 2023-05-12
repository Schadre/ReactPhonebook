import { useState } from "react"
import { Link } from "react-router-dom"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, Providers } from '../config/firebase'

function Navbar() {

  const signOutOnClick = () => {
    signOut(auth)
    window.location.reload();
  }

  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  const signInOnClick = async () => {
    try {
      const response = await signInWithPopup(auth, Providers.google);
      console.log(response);
      setErrorMessage(null);
      window.location.reload();
    } catch (error) {
      console.error('Error signing in:', error);
      setErrorMessage('There was an error while signing in. Please try again.');
    }
  }
  

  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-900 bg-opacity-60 p-4 shadow-lg">
        <div className="flex items-center flex-shrink-0 text-red-200 mr-6">
            <Link to="https://www.youtube.com/watch?v=uxpDa-c-4Mc" target="_blank" className="font-semibold text-xl tracking-tight hover:text-red-50">Hotline Bling</Link>
        </div>
        <div className="flex space-x-4">
            <Link to="/" className="flex items-center px-3 py-2 text-red-200 hover:text-red-50">
              <i className="fa-solid fa-house" title="Home"></i>
            </Link>
            <Link to="/dashboard" className="flex items-center px-3 py-2 text-red-200 hover:text-red-50">
              <i className="fa-solid fa-phone" title="Phonebook"></i>
            </Link>
            <Link to="/about" className="flex items-center px-3 py-2 text-red-200 hover:text-red-50">
              <i className="fa-solid fa-id-card" title="About"></i>
            </Link>
            {
              !auth.currentUser ? 

            <button className="flex items-center px-3 py-2 text-red-200 hover:text-red-50" onClick={signInOnClick}>
              <i className="fa-solid fa-right-to-bracket" title="Sign In"></i>
            </button>
            :
            <>
            <button className="flex items-center px-3 py-2 text-red-200 hover:text-red-50" onClick={signOutOnClick}>
              <i className="fa-solid fa-right-from-bracket" title="Sign Out"></i>
            </button> 
            </>
            }
        </div>
    </nav>
    
  )
}

export default Navbar
