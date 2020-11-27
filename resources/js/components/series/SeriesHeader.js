import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../../css/Series.css'

const SeriesHeader = props => (
    <Div>
        <div>
            <div>Сегодня в 22:00</div>
            <div>ESL 2020</div>
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
);

SeriesHeader.propTypes = {
    team_1: PropTypes.string.isRequired,
    team_2: PropTypes.string.isRequired,
};

export default SeriesHeader;

