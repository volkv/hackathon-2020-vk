import React, {useContext, useState} from 'react';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const TournamentHeader = ({}) => {

    return (
        <Div>
            <div className="tournament-header">
                <div className="tournament-header__top">
                    <div className="tournament-header__tournament">2020 DreamHack Masters Winter Europe</div>
                    <div className="tournament-header__date">29 ноября - 05 декабря</div>
                </div>
            </div>
        </Div>
    )
};

export default TournamentHeader;

