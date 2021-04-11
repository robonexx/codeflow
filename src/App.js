import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'
import DoughChart from './DoughnutChart'
import './App.css';

import NavBar from './NavBar'

import {ThemeProvider} from "styled-components";
import  {useDarkMode} from './UseDarkMode'
import { GlobalStyles } from './GlobalStyles'
import { lightTheme, darkTheme } from "./themes"
import ThemeToggler from "./themeToggler"


function App() {
  const [theme, themeToggle] = useDarkMode();
  

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  return (
    <div className="App">
     <ThemeProvider theme={themeMode}>
          <ThemeToggler theme={theme} toggleTheme={themeToggle} />
            <GlobalStyles/>
     <h1>MY CHARTS TRAINING</h1>
     <NavBar />
     <LineChart />
     <BarChart />
     <PieChart/>
     <DoughChart />
     </ThemeProvider>
    </div>
  );
}

export default App;