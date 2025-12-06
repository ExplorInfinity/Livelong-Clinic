import { useRef, type JSX } from 'react'
import Header from './app/shared/header/header'
import Footer from './app/shared/footer/footer'
import Home from './app/home/home'
import LoginForm from './app/features/auth/loginForm/loginForm'
import SignupForm from './app/features/auth/signupForm/signupForm'
import FindDoctor from './app/features/findDoctor/findDoctor'

function App(): JSX.Element {

  const loginDialogRef = useRef<HTMLDialogElement | null>(null);
  const signupDialogRef = useRef<HTMLDialogElement | null>(null);
  const findDialogRef = useRef<HTMLDialogElement | null>(null);

  function showDialog(dialogRef: React.RefObject<HTMLDialogElement | null>) {
    dialogRef.current?.showModal();
  }

  function closeDialog(dialogRef: React.RefObject<HTMLDialogElement | null>) {
    dialogRef.current?.close();
  }

  return (
    <>
      <Header 
        showLoginForm={() => showDialog(loginDialogRef)} 
        showFindDoctorsPage={() => showDialog(findDialogRef)}
        />
      <Home 
        showLoginForm={() => showDialog(loginDialogRef)} 
        showFindDoctorsPage={() => showDialog(findDialogRef)}
        />
      <Footer/>
      <LoginForm 
          forwardRef={loginDialogRef} 
          openSignupForm={(): void => showDialog(signupDialogRef)}
          closeForm={(): void => closeDialog(loginDialogRef)} 
        />
      <SignupForm 
          forwardRef={signupDialogRef} 
          openLoginForm={(): void => showDialog(loginDialogRef)}
          closeForm={(): void => closeDialog(loginDialogRef)} 
        />
      <FindDoctor forwardRef={findDialogRef} />
    </>
  )
}

export default App