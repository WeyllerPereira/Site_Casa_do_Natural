import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage'; // Importe a ProductsPage aqui
// Outras importações, caso existam

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} /> {/* Adicione esta linha */}
        {/* Outras rotas aqui */}
      </Switch>
    </Router>
  );
}

export default App;
