import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../css/Series.css'
import TeamLogo from "./TeamLogo";

const MatchItem = props => (
    <Div>
        <div className="series__row">
            <TeamLogo/>
            <TeamLogo/>
            <div className="series__item">
                <div>{props.team_1} - {props.team_2}</div>
                <div>Сегодня в 22:00</div>
            </div>
        </div>
    </Div>
);

MatchItem.propTypes = {
    team_1: PropTypes.string.isRequired,
    team_2: PropTypes.string.isRequired,
};

export default MatchItem;

