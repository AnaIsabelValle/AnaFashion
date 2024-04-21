import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import LoginForm from './pages/LoginForm/LoginForm';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
