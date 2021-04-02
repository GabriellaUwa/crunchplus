import Header from "./components/Header";
import StickyFooter from "./components/Footer";
import FormStuff from "./components/Form";
import Results from "./components/Results";
import {Route, Switch} from 'react-router-dom';
import './App.css';

export default function App() {
    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>
            <div className="mid">
                <Switch>
                    <Route path="/results" component={Results}/>
                    <Route path="/" component={FormStuff}/>
                </Switch>
            </div>
            <div className="footer">
                <StickyFooter/>
            </div>
        </div>
    );
}