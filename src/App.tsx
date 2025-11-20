import { useState, type JSX } from 'react'
import Header from './app/shared/header/header'
import Footer from './app/shared/footer/footer'
import Home from './app/home/home'
import LoginForm from './app/features/auth/loginForm/loginForm'

function App(): JSX.Element {

  const [ showLoginForm, setShowLoginForm ] = useState(false);

  function toggleLoginForm() {
    setShowLoginForm(prev => !prev);
  }

  return (
    <>
      <Header toggleLoginForm={toggleLoginForm} />
      <Home/>
      <Footer/>
      { showLoginForm && <LoginForm toggle={toggleLoginForm} /> }
    </>
  )
}

export default App