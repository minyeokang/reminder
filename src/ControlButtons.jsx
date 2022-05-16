import React from "react";

export default function ControlButtons(props) {
    const StartButton = (
        <div className="btn btn-one btn-start"
            onClick={props.handleStart}>
            Start
        </div>
    );
    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn btn-two"
                onClick={props.handleReset}>
                <img src="img/icon_reset.png" alt="" />
            </div>
            <div className="btn btn-one"
                onClick={props.handlePauseResume}>
                {props.isPaused ? <img src="img/icon_resume.png" alt="" /> : <img src="img/icon_pause.png" alt="" />}
            </div>
        </div>
    );

    return (
        <div className="Control-Buttons">
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
    );
}