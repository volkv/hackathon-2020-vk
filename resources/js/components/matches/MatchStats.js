import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const MatchStats = () => {

    return (
        <Div>
            <Div className='match__stats'>
                <img src='/media/stats.png'/>
            </Div>
        </Div>
    )
};

export default MatchStats;

