import data from './data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Drug from './components/Drug';

function App() {
  const drugs = data.drugs

  return (
    <Router>
      <div className='App h-full overflow-scroll scrollbar-hide flex justify-center m-auto'>

        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home drugs={drugs}/>
            </Route>

            {drugs.map(drug => {
              return(
                <Route key={drug.name} exact path={"/" + drug.name}>
                  <Drug drug={drug}/>
                </Route>
              )
            })}
          </Switch>
        </div>
      </div>
    </Router>
    
  )
}

export default App;
