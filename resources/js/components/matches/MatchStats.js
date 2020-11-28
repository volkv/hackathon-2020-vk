import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../../css/Series.css'

const MatchStats = ({stats}) => {

    return (
        <Div>
            {stats.stats}
        </Div>
    )
};

MatchStats.propTypes = {
    stats: PropTypes.object.isRequired,
};

export default MatchStats;

