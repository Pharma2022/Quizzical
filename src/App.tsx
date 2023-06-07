import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Modal from './pages/Modal'
import Quiz from './pages/Quiz'
import Layout from './components/Generic Components/Layout'

const  App=()=> {

      return (
          <BrowserRouter>
            <Routes>
              <Route element={<Layout/>}>
              <Route path='/' element={<Modal/>}/>
              <Route path='/quiz' element={<Quiz/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
  )
}

export default App
