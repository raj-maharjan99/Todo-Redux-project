// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoComponent from "./TodoComponent";
import "./styles.css"; // Import your CSS file here

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>RAJ TODO App</h1>
        </header>
        <main className="App-main">
          <TodoComponent />
        </main>
      </div>
    </Provider>
  );
}

export default App;
