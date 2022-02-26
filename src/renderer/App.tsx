import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import SplashPage from './Pages/SplashPage';

export default function App() {
  return (
    <div className="bg-neutral-600 h-screen w-screen">
      <Router>
        <Switch>
          <Route path="/" component={SplashPage} />
        </Switch>
      </Router>
    </div>
  );
}
