import './App.css';
import {Route} from "react-router-dom"
import AmiiboPage from "./AmiiboPage"
import MainPage from "./MainPage.js"
import Navbar from "./Navbar.js"

function App() {

  return (
    <main className="App">
      <Navbar></Navbar>
      <Route path="/" exact>
        <MainPage></MainPage>
      </Route>
      <Route path="/character">
        <AmiiboPage pageType="character"/>
      </Route>
      <Route path="/gameSeries">
        <AmiiboPage pageType="gameseries"/>
      </Route>
      <Route path="/amiiboSeries">
        <AmiiboPage pageType="amiiboSeries"/>
      </Route>
    </main>
  );
}

export default App;
