import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar store={props.state}
            />
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() =>
                    <Profile store={props.store} />}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer store={props.store}/>}/>
                <Route path='/news' render={() =>
                    <News/>}/>
                <Route path='/music' render={() =>
                    <Music/>}/>
                <Route path='/settings' render={() =>
                    <Settings/>}/>
            </div>
        </div>
    );
}


export default App;
