import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/layouts/Footer/Footer';
import AppRoutes  from './Router';



const App = () => {
   
   return (
      <div className='app'>
         <Router>
            <AppRoutes />
            <Footer />
         </Router>
      </div>
   )
};

export default App;