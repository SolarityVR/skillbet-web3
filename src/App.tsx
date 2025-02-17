import {
  BrowserRouter as Router,
  Route,
  RouteProps,
  Routes,
} from 'react-router-dom';
import routes from './routes/routes';
import Header from './components/Layout/Header';
import { useEffect } from 'react';
import socket from './utils/socket-client';

function App() {

  useEffect(() => {
    (window as any).socket = socket();
  }, [])
  return (
    <div>
      <Header/>
      <Router>
       <Routes>
          {routes.map((route: RouteProps) => (
            <Route key={`routes-${route.path}`} {...route} />
          ))}
       </Routes>
      </Router>
    </div>
  )
}

export default App
