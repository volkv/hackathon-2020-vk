import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../../css/match.css'
import TeamLogo from "../TeamLogo";

const MatchHeader = props => {

    return (
        <Div>
            <div className="match-header">
                <div className="match-header__top">
                    <div className="match-header__tournament">ESL 2020</div>
                    <div className="match-header__date">20.02 в 14:00</div>
                </div>
                <div className="match-header__teams">
                    <div className="match-header__score">
                        - : -
                    </div>
                    <div className="match-header__team">
                        <div className="match-header__team-logo"><TeamLogo width={"85px"} height={"85px"} /></div>
                        <div className="match-header__team-name">{props.team_1}</div>
                    </div>
                    <div className="match-header__team">
                        <div className="match-header__team-logo"><TeamLogo width={"85px"} height={"85px"} /></div>
                        <div className="match-header__team-name">{props.team_2}</div>
                    </div>
                </div>
            </div>
        </Div>
    )
};

MatchHeader.propTypes = {
    team_1: PropTypes.string.isRequired,
    team_2: PropTypes.string.isRequired,
};

export default MatchHeader;

