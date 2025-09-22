
import MarkdownViewer from './MarkdownViewer/MarkdownViewer.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home.jsx'

function App() {


  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/visualizar' element={<MarkdownViewer />} />
        </Routes>
      </HashRouter>
  )
}

export default App;
