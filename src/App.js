import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* import Header from './components/header' */
import Home from './pages/Home'
import Landing from './pages/Landing'
import Koti from './pages/Koti'  
import Login from './pages/Login' 
import Charts from './pages/Charts'
/*
import Message from './pages/Message'
import Work from './pages/Work' */
import Error from './pages/Error'
/* import {ThemeProvider} from "styled-components";
import  {useDarkMode} from './/components/themes/UseDarkMode'
import { GlobalStyles } from './components/themes/GlobalStyles'
import { lightTheme, darkTheme } from ".//components/themes/themes"
import ThemeToggler from ".//components/themes/themeToggler" */


function App() {
  /* const [theme, themeToggle] = useDarkMode();
  

  const themeMode = theme === 'light' ? lightTheme : darkTheme; */


  return (
    <Router>
     {/* <ThemeProvider theme={themeMode}>
          <ThemeToggler theme={theme} toggleTheme={themeToggle} />
            <GlobalStyles/>
            <Header members={[""]} /> */}
            <Switch>
                    <Route exact path="/login" component={Login} />
              
                    <Route exact path="/" component={Home} />
                    <Route exact path="/landing" component={Landing} />
                    <Route exact path="/charts" component={Charts} />
                    {/*}
                    <Route exact path="/message" component={Message} />
                    <Route exact path="/work" component={Work} /> */}

                    <Route exact path="*" component={Error}/>
                  </Switch>
    
     {/* </ThemeProvider> */}
    </Router>
  );
}

export default App;