import Investors from "./Investors";
import './Results.css';
import RaiseChart from "./RaiseChart";

// Component for how we'd like all the search results (table, charts, etc.) to show
export default function Results(props) {
    return (
        <div className="outer-most-div">
            <div className="outer-div-1">
                <div className="title-div">
                    <text className="text-styling">
                        THE VCs TAILORED FOR YOUR STARTUP
                    </text>
                </div>
            </div>
            <div className="outer-div-2">
                <div className="table-div">
                    <Investors props={props.location.props.funding_type}/>
                </div>
                <div className="outer-div-3">
                    <div className="element2">
                        <text className="text-styling2">
                            GLOBAL EARLY STAGE AND SEED INVESTMENT RATIO
                        </text>
                    </div>
                    <RaiseChart/>
                </div>
            </div>
        </div>
    );
}