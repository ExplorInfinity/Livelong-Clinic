import type {JSX} from 'react'
import Header from './app/shared/header/header'
import Footer from './app/shared/footer/footer'
import Home from './app/home/home'

function App(): JSX.Element {
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App