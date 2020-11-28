import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../../css/Series.css'

const MatchRoster = ({roster}) => {

    return (
        <Div>
            {roster.roster}
        </Div>
    )
};

MatchRoster.propTypes = {
    roster: PropTypes.object.isRequired,
};

export default MatchRoster;

