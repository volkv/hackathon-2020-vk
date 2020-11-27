import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../css/Series.css'
import TeamLogo from "./TeamLogo";

const MatchItem = ({ match, href, dataTo }) => (
    <Div onClick={href} data-to={dataTo}>
        <div className="series__row">
            <TeamLogo/>
            <TeamLogo/>
            <div className="series__item">
                <div>{match.team_1} - {match.team_2}</div>
                <div>Сегодня в 22:00</div>
            </div>
        </div>
    </Div>
);

MatchItem.propTypes = {
    dataTo: PropTypes.string.isRequired,
    href: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
};

export default MatchItem;

