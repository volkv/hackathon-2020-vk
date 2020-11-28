import React from 'react';
import PropTypes from 'prop-types';
import {Div} from "@vkontakte/vkui";

import '../../css/match.css'
import TeamLogo from "./TeamLogo";

const Match = ({teamHome, teamAway, startTime, endTime, scores, match, teamHomeId, teamAwayId}) => {
    const onClick = () => {};

    return (
        <Div onClick={onClick} data-to="match">
            <div className="match__row">
                <div className="match__game">
                    <TeamLogo/>
                </div>
                <div className="match__teams">
                    <div className="match__team">
                        <TeamLogo background={teamHome.images.default}/>
                        <div>
                            {teamHome.name}
                        </div>
                    </div>
                    <div className="match__score">
                        <div>{scores[teamHomeId]} : {scores[teamAwayId]}</div>
                    </div>
                    <div className="match__team">
                        <TeamLogo background={teamAway.images.default}/>
                        <div>
                            {teamAway.name}
                        </div>
                    </div>
                </div>
                <div className="match__date">
                    {startTime}
                </div>
            </div>
        </Div>
    );
};

export default Match;

