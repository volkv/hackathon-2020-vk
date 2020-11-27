import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../css/Series.css'
import TeamLogo from "./TeamLogo";

const MatchItem = ({ team_1, team_2, href, dataTo }) => (
    <Div onClick={href} data-to={dataTo}>
        <div className="series__row">
            <TeamLogo/>
            <TeamLogo/>
            <div className="series__item">
                <div>{team_1} - {team_2}</div>
                <div>Сегодня в 22:00</div>
            </div>
        </div>
    </Div>
);

MatchItem.propTypes = {
    dataTo: PropTypes.string.isRequired,
    href: PropTypes.func.isRequired,
    team_1: PropTypes.string.isRequired,
    team_2: PropTypes.string.isRequired,
};

export default MatchItem;

