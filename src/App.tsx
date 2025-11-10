import type {JSX} from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main'

function App(): JSX.Element {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
