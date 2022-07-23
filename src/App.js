import './App.css';
import { HashRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Contacts from './Components/contacts/Contacts'
import Header from './Components/layouts/Header'
import { Provider } from './Context'
import AddContact from './Components/contacts/addContact'
import NotFound from './Components/pages/NotFound';
import Test from './Components/pages/Test';


function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path='/' element={
              <>
              < AddContact />
              <Link to="/contacts">Contacts</Link>
              </>
            }/>
            <Route  path='/contacts' element={
              <>
                <Contacts></Contacts>
                <Link to="/">Home</Link>
              </>
              } />
            <Route path='/test' element={<Test/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </div>
      </Router>

    </Provider>
  );
}

export default App;
