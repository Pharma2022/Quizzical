import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Modal from './pages/Modal'
import Quiz from './pages/Quiz'

const  App=()=> {

      return (
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Modal/>}/>
              <Route path='/quiz' element={<Quiz/>}/>
            </Routes>
          </BrowserRouter>
  )
}

export default App
