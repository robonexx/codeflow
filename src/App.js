import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'
import DoughChart from './DoughnutChart'
import './App.css';

function App() {


  return (
    <div className="App">
     <h1>MY CHARTS TRAINING</h1>
     <LineChart />
     <BarChart />
     <PieChart/>
     <DoughChart />
    </div>
  );
}

export default App;