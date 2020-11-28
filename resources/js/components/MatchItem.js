import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../css/Series.css'
import TeamLogo from "./TeamLogo";

const Match = ({ match, href, dataTo }) => (
    <Div onClick={href} data-to={dataTo}>
        <div className="series__row">
            <TeamLogo/>
            <div className="series__item">
                <div className="match__item-team match__item-team--left">
                    <TeamLogo/>
                    <div>
                        {match.team_1}
                    </div>
                </div>
                -
                <div className="match__item-team match__item-team match__item-team--right">
                    <TeamLogo/>
                    <div>
                        {match.team_2}
                    </div>
                </div>
            </div>
            <div>
                {match.team1_score} - {match.team2_score}
            </div>
        </div>
    </Div>
);

Match.propTypes = {
    dataTo: PropTypes.string.isRequired,
    href: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
};

export default Match;

