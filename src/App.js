import { Route } from "react-router-dom";
import Header from "./components/Header";
import UpdatesStatistics from "./components/UpdatesStatistics";
import Updates from "./components/Updates";
import Installations from "./components/Installations";
import Location from "./components/Location";
import Client from "./components/Client";
function App() {
  return (
    <div>
      <Route exact path="/">
        <Header />
        <UpdatesStatistics />
        <Updates />
      </Route>
      <Route path="/installation">
        <Installations />
      </Route>
      <Route path="/location">
        <Location />
      </Route>
      <Route path="/client">
        <Client />
      </Route>
      <br></br>
    </div>
  );
}

export default App;
