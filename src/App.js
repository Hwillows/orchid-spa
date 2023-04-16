import "./App.css";
import Homescreen1 from "./components/Homescreen1";
import Secondpage from "./components/Secondpage";
import Rooms from "./components/Rooms";
import TripAdvisor from "./components/TripAdvisor";
import Discover from "./components/Discover";
import History from "./components/History";
import Journal from "./components/Journal";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="App">
      <Homescreen1 />
      <Secondpage />
      <Rooms />
      <TripAdvisor />
      <Discover />
      <History />
      <Journal />
      <Booking />
    </div>
  );
}

export default App;
