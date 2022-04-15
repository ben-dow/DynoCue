import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import SplashPage from './Pages/SplashPage';
import Settings from './Pages/Settings/Settings';
import Home from './Pages/core/home';

export default function App() {
  return (
    <div className="bg-neutral-600 h-screen w-screen">
      <Router>
        <Switch>
          <Route path="/" exact component={SplashPage} />
          <Route path="/settings" component={Settings} />
          <Route path="/core" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
