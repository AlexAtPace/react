import logo from './logo.svg';
import './App.css';
import House from './components/House';
import Room from './components/Room'; // path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://images.onlinelabels.com/images/clip-art/Anonymous/Anonymous_Small_House.png"} className="App-logo" alt="logo" />
            <House>
              <Room name="Livingroom">
              </Room>
              <Room name="Kitchen">
              </Room>
              <Room name="Bathroom">
              </Room>
            </House>
        {/* <a
          className="App-link"
          href="https://www.homedepot.com/?irgwc=1&cm_mmc=afl-ir-2003851-1420157-EdgeBingFlow&clickid=xCyxYjWz5xyPW5PxQnzRXww1UkH3psVxI2oIx80"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home improvement
        </a> */}
      </header>
    </div>
  );
}

export default App;
