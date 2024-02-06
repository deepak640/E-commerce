import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import Container from './utils/Container';

function App() {

  return (
    <>
      <BrowserRouter>
        <Container>
        <Routes/>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
