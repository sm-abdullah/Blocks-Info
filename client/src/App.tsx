import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlockListingContainer from './BlockListing/BlockListingContainer';
import Dialogbox from './DialogBox';
import { ListLoading } from './BlockListing/Components/ListLoading';




function App() {
  return (
    <div className="App">
      <BlockListingContainer />
    </div>

  );
}

export default App;
