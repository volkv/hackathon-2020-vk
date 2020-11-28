import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../../css/match.css'
import TeamLogo from "../TeamLogo";

const MatchHeader = ({teamHome, teamAway, startTime, endTime, scores, teamHomeId, teamAwayId}) => {
    return (
        <Div>
            <div className="match-header">
                <div className="match-header__top">
                    <div className="match-header__tournament">ESL 2020</div>
                    <div className="match-header__date">{startTime}</div>
                </div>
                <div className="match-header__teams">
                    <div className="match-header__score">
                        {scores[teamHomeId]} : {scores[teamAwayId]}
                    </div>
                    <div className="match-header__team">
                        <div className="match-header__team-logo"><TeamLogo width={"85px"} height={"85px"} background={teamHome.images.default} /></div>
                        <div className="match-header__team-name">{teamHome.name}</div>
                    </div>
                    <div className="match-header__team">
                        <div className="match-header__team-logo"><TeamLogo width={"85px"} height={"85px"} background={teamAway.images.default} /></div>
                        <div className="match-header__team-name">{teamAway.name}</div>
                    </div>
                </div>
            </div>
        </Div>
    )
};

export default MatchHeader;

