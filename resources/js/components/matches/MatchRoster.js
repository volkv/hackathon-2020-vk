import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../../css/roster.css'

const MatchRoster = ({teamHomeRoster, teamAwayRoster}) => {

    return (
        <Div>
            <div className='roster__container'>
                <div className='roster__list'>
                    {teamHomeRoster.map(player => {
                        return (
                            <div key={player.id} className='roster__list-item'>
                                <span>{player.nick_name}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='roster__list'>
                    {teamAwayRoster.map(player => {
                        return (
                            <div key={player.id} className='roster__list-item'>
                                <span>{player.nick_name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Div>
    )
};

export default MatchRoster;

