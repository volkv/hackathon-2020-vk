import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../../css/Series.css'

const MatchHeader = props => {

    return (
        <Div>
            <div className="match__header">
                <div className="match__header-tournament">ESL 2020</div>
            </div>
            <div>
                <div>
                    {/*logo*/}
                    <div>
                        {props.team_1}
                    </div>
                </div>
                <div>
                    2 : 1
                </div>
                <div>
                    {/*logo*/}
                    <div>
                        {props.team_2}
                    </div>
                </div>
            </div>
        </Div>
    )
};

MatchHeader.propTypes = {
    team_1: PropTypes.string.isRequired,
    team_2: PropTypes.string.isRequired,
};

export default MatchHeader;

