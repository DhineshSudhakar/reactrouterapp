import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from './components/CustomRoutes'
import Navigation from './components/Navigation'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <CustomRoutes />
    </BrowserRouter>
  )
}

export default App;
