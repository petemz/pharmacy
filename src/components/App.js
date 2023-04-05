import data from './data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Drug from './Drug';
import Dosage from './Dosage';
import Frequency from './Frequency'
import Duration from './Duration';

function App() {
  const drugs = data.drugs

  return (
    <Router>
      <div className='App h-[696px] overflow-scroll scrollbar-hide'>

        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home drugs={drugs}/>
            </Route>

            <Route path="/drg">
              <Drug drug={drugs[1]}/>
            </Route>

            <Route path="/dsg">
              <Dosage />
            </Route>

            <Route path="/frq">
              <Frequency />
            </Route>

            <Route path="/dur">
              <Duration />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  )
}

export default App;
