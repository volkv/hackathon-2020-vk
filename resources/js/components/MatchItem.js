import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../css/match.css'
import TeamLogo from "./TeamLogo";

const Match = ({match, href, dataTo}) => (
    <Div onClick={href} data-to={dataTo}>
        <div className="match__row">
            <div className="match__game">
                <TeamLogo/>
            </div>
            <div className="match__teams">
                <div className="match__team">
                    <TeamLogo background={"https://lurkmore.so/images/thumb/b/b1/Dota2logo.png/200px-Dota2logo.png"}/>
                    <div>
                        {match.team_1}
                    </div>
                </div>
                <div className="match__score">
                    <div>- : -</div>
                </div>
                <div className="match__team">
                    <TeamLogo/>
                    <div>
                        {match.team_1}
                    </div>
                </div>
            </div>
            <div className="match__date">
                Сегодня в 12:00
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

