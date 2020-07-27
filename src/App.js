import React from 'react';
import logo from './logo.svg';
import { Container, Divider } from 'semantic-ui-react'
import './App.css';
import ProductCard from "./components/Card";

function App() {
  return (
    <div className="App">
        <Container textAlign='center'>
            <ProductCard/>
        </Container>

    </div>
  );
}

export default App;
