
import NotFound from "./components/error/NotFound";
import Home from "./pages/Home";
import {
    Routes,
    Route, BrowserRouter as Router
} from "react-router-dom";
import MainHeader from "./layout/Main-Header";


const App = () => {
  return (
    <Router>
        <MainHeader   />
        <Routes>
            <Route path='*' element={<NotFound />} />
            <Route index element={<Home  />} />
        </Routes>
    </Router>
  );


}

export default App;
