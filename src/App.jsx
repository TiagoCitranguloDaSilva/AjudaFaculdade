
import MarkdownViewer from './MarkdownViewer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './Home/Home.jsx'

function App() {
  

  return(

   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/visualizar' element={<MarkdownViewer />}/>
    </Routes>
   </BrowserRouter>

    
  )
}

export default App;
