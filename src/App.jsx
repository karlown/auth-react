import './App.css';
import Login from './Login/Loginform';
import Register from './Login/Regform';
import React, { useState } from "react";
function App() {
    const [currentForm, setCurrentForm] = useState('login');

const toggleForm = (formName) => {
  setCurrentForm(formName);
}
  return (
<div className='app'>

<div className="App">
  {
    currentForm === "register" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
  }
</div>

</div>
  );
}
export default App;
