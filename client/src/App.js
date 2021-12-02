
import './App.css';
import Loading from'./views/loading/Loading'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from './components/layout/Landing';
import FeedbackContextProvider from './contexts/FeedbackContext';
function App() {
  return (
    <FeedbackContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path='/home' element={<Loading PageRoute='home'/>} />
          <Route exact path='/product' element={<Loading PageRoute='product' />} />
        </Routes>
      </Router>
    </FeedbackContextProvider>
  );
}

export default App;