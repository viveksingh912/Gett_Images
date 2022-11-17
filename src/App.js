
import './App.css';
import NavBar from './components/NavBar';
import Body from './components/PhotoBody';
import { Route, Routes } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
import { setProgress } from './store/ActionCreators';
import { useSelector,useDispatch } from 'react-redux';
function App() {
  const progress=useSelector(state=>state.changeProgress);
  // console.log(loading);
  const dispatch=useDispatch();
  return (
      <>
      <NavBar key={'navigation'} />
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => dispatch(setProgress(0))} 
      />
      <Routes>
      <Route exact path="/" element={<Body key={'marvel'} val='marvel'/>} />
      <Route path="/technology" element={<Body key={'technology'} val={'technology'}/>} />
      <Route path="/sports" element={<Body key={'sports'} val={'sports'}/>} />
      <Route path="/birds" element={<Body key={'birds'} val={'birds'}/>} />
      <Route path="/science" element={<Body key={'science'} val={'science'}/>} />
      <Route path="/cars" element={<Body key={'cars'} val={'cars'}/>} />
      </Routes>
      </>
  );
}

export default App;
