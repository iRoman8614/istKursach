import './App.css';
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<MainPage />} />
                <Route path={'/test'} element={<TestPage />} />
                <Route path={'/profile'} element={<ProfilePage />} />
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
