import './App.css';
import Hedear from './Hedear';
import Hotelmenu from './Hotelmenu';
import { Route, Routes } from 'react-router-dom';
import Single from './Single';
import Signin from './Signin';
import Footer from './Footer';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Hedear/>
      <Routes>
        <Route path='/moreinformationforhotel' element = {<Single />}></Route>
        <Route path='/Home' element = {<Home />}></Route>
        <Route path='/Menu' element = {<Hotelmenu />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>
      <Footer />
      <Signin />
     
    </div>
  );
}

export default App;