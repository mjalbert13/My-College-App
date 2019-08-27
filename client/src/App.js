import React, {Component} from 'react';
// import Navbar from "./components/Navbar";

// import SearchPage from "./Pages/Search/Search";

import Register from './Components/searchForms/register'
import Navbar from './Components/Navbar/index'

// import Navbar from "./components/Navbar";
// import SearchPage from "./pages/Search/Search";


// import Register from './Components/searchForms/register'

class App extends Component {
  render (){
    return (


      

     <div className="App">
       <Navbar />
        <Register />

     </div>
      
    );
  }
}
export default App;