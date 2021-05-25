import './App.css';
import ExpenseItem from "./components/ExpenseItem";


function App() {
  return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       I don't wanna learn React
      //     </a>
      //   </header>
      // </div>
      <div>
          <h2>
              Let's get started!
          </h2>
          <ExpenseItem></ExpenseItem>
      </div>
  );
}

//sda

export default App;
