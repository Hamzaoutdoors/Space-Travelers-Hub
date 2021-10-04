import logo from './media/planet.png';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route path="/" exact>
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
