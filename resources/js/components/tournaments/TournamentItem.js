import React, {useContext} from 'react';
import {Div} from "@vkontakte/vkui";
import {RouterContext} from '../../App';

import TeamLogo from "../TeamLogo";

const TournamentItem = () => {
    const {go} = useContext(RouterContext);

    const onClick = (e) => {
        console.log(e)
        go(e);
    };

    return (
        <Div onClick={onClick} data-to="tournament" className="tournament__row">
            <div className="tournament__logo">
                <TeamLogo width={'25px'} height={'25px'}/>
            </div>
            <div className="tournament__info">
                <div className="tournament__title">ESL PRO</div>
                <div className="tournament__date">24.01 - 25.02</div>
            </div>
        </Div>
    );
};

export default TournamentItem;

