import * as React from "react";

// import { useSpring } from 'react-spring'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./services/ProtectedRoute";
import Dashboard from "./pages/Dashboard"; 
// import Suggestions from "./components/suggestions/Suggestions";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
// import TEST from "./components/classes/TEST";
// import ScrollToTop from "./components/utility/ScrollToTop";
// import ClassesDash from "./components/classes/ClassesDash";
// import Navbar from "./components/Navbar";
import Auth from "./pages/Auth.jsx";
// import ChatTest from "./components/chat/ChatTest";


function App() {
  // const fade = useSpring({
  //   from:{
  //     opacity:0,
  //     scale:0.98
  //   },
  //   to:{
  //     opacity:1,
  //     scale:1
  //   }
  // })
  
  return (

    <BrowserRouter>
      {/* <ChatTest/> */}
      <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/Landing' component={Landing}></Route>
        <Route exact path='/Auth' component={Auth}></Route>

        <ProtectedRoute exact path="/Dashboard" component={Dashboard}></ProtectedRoute>
        <ProtectedRoute exact path="/Profile" component={Profile}></ProtectedRoute>

      </Switch>
    </BrowserRouter>
    
    
    
    
  )
}

export default App;
