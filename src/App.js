import React from "react";
import { HashRouter } from "react-router-dom"
import Main from "./UI-Route/Routes/Main"

class App extends React.Component {
  render() {
    return (
      <div>
     <HashRouter>
          <Main />
        </HashRouter>
      </div>
    );
  }
}
export default App;
