import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../../css/roster.css'

const MatchRoster = ({rosters}) => {

    return (
        <Div>
            <div className='roster__container'>
                <div className='roster__list'>
                    <div className='roster__list-item'>
                        <span>Rusiano228</span>
                    </div>
                    <div className='roster__list-item'>
                        <span>Rusiano228</span>
                    </div>
                    <div className='roster__list-item'>
                        <span>Rusiano228</span>
                    </div>
                </div>
                <div className='roster__list'>
                    <div className='roster__list-item'>
                        <span>Rusiano228</span>
                    </div>
                    <div className='roster__list-item'>
                        <span>Rusiano228</span>
                    </div>
                    <div className='roster__list-item'>
                        <span>Rusiano228</span>
                    </div>
                </div>
            </div>
        </Div>
    )
};

MatchRoster.propTypes = {
    rosters: PropTypes.array.isRequired,
};

export default MatchRoster;

