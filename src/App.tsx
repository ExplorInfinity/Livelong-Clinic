import { useRef, type JSX } from 'react'
import Header from './app/shared/header/header'
import Footer from './app/shared/footer/footer'
import Home from './app/home/home'
import LoginForm from './app/features/auth/loginForm/loginForm'
import FindDoctor from './app/features/findDoctor/findDoctor'

function App(): JSX.Element {

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  function showDialog(dialogRef: React.RefObject<HTMLDialogElement | null>) {
    dialogRef.current?.showModal();
  }

  function closeDialog(dialogRef: React.RefObject<HTMLDialogElement | null>) {
    dialogRef.current?.close();
  }

  return (
    <>
      <Header showLoginForm={() => showDialog(dialogRef)} />
      <Home/>
      <Footer/>
      <LoginForm forwardRef={dialogRef} closeForm={(): void => closeDialog(dialogRef)} />
      <FindDoctor />
    </>
  )
}

export default App