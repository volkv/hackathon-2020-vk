import React, {useContext, useState} from 'react';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import '../../../css/tournament.css'

const TournamentHeader = ({}) => {

    return (
        <Div>
            <div className="tournament-header">
                <div className="tournament-header__top">
                    <div className="tournament-header__tournament">ESL 2020</div>
                    <div className="tournament-header__date">24.02-13.03</div>
                </div>
            </div>
        </Div>
    )
};

export default TournamentHeader;

