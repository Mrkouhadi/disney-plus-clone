import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Detail from './components/Detail';

const App=() =>{
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
            <Route exact path="/">
                <Login/>
                <Footer/>
            </Route>
            <Route exact path="/home">
                <Home/>
                <Footer/>
            </Route>
            <Route exact path="/detail/:id"  component={Detail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
