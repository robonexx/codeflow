import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* import NavBar from './NavBar' */
import Header from './header'
import Dashboard from './pages/Dashboard'
import Charts from './pages/Charts'
import Message from './pages/Message'
import Work from './pages/Work'
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from './UseDarkMode'
import { GlobalStyles } from './GlobalStyles'
import { lightTheme, darkTheme } from "./themes"
import ThemeToggler from "./themeToggler"


function App() {
  const [theme, themeToggle] = useDarkMode();
  

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  return (
    <Router>
    <div className="App">
     <ThemeProvider theme={themeMode}>
          <ThemeToggler theme={theme} toggleTheme={themeToggle} />
            <GlobalStyles/>
            <Header />
            <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/charts" component={Charts} />
                    <Route exact path="/message" component={Message} />
                    <Route exact path="/work" component={Work} />
                  </Switch>
    {/*  <NavBar /> */}
    
     </ThemeProvider>
    </div>
    </Router>
  );
}

export default App;