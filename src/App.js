import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {useState} from 'react';


function App() {
  const [darkMode,setDarkMode] = useState(true)

  function toggleDarkMode (){
    setDarkMode (prevState => !prevState)
  }
  
  return (
    <div className="App">
      <Header  darkMode = {darkMode} toggleDarkMode={toggleDarkMode} />
      <Body darkMode = {darkMode} />
      <Footer darkMode = {darkMode} />

    </div>
  );
}

export default App;
