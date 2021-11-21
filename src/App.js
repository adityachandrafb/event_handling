import React from 'react';
import FormInput from './component/FormInput';
import List from './component/List';
import Footer from './component/Footer';
import DataProvider from './component/DataProvider'

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>TODOS</h1>
        <FormInput />
        <List />
        <Footer/>
      </div>
    </DataProvider>
  )
}

export default App;