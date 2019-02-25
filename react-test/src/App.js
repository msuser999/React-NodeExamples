import React from 'react'
import './App.css'
import ExampleApp from './components/ExampleApp'
import Example2 from './components/Example2'

/*  -- EXAMPLE REACT APP --
  1. When creating a new app:
      In console: npx create-react-app appname
  2. Or when using an existing app, use __ npm install __
      This updates all the used packages
  3. Start app with __ npm start __
  4. Install axios for HTTP: npm install axios --save
      Do this in root folder (where package.json is)
*/
const App = () => {
    console.log("App started")  // note in React, this prints to the console in browser
    return (
      <div className="App">
        <h2> -- EXAMPLE REACT APP -- </h2>
        <ExampleApp/>
        <Example2/>
      </div>
    )
}

export default App