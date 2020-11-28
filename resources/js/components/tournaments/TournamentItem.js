import React, {useContext} from 'react';
import {Div} from "@vkontakte/vkui";
import {RouterContext} from '../../App';
import { DateTime } from 'luxon';

import TeamLogo from "../TeamLogo";

const TournamentItem = ({title, logo, start, end}) => {
    const formattedStart = DateTime.fromSQL(start).setLocale('ru').toLocaleString(({ month: 'long', day: '2-digit' }));
    const formattedEnd = DateTime.fromSQL(end).setLocale('ru').toLocaleString(({ month: 'long', day: '2-digit' }));

    const {go} = useContext(RouterContext);

    const onClick = (e) => {
        go(e);
    };

    return (
        <Div onClick={onClick} data-to="tournament" className="tournament__row">
            <div className="tournament__logo">
                <TeamLogo width={'25px'} height={'25px'} background={logo}/>
            </div>
            <div className="tournament__info">
                <div className="tournament__title">{title}</div>
                <div className="tournament__date">{formattedStart} - {formattedEnd}</div>
            </div>
        </Div>
    );
};

export default TournamentItem;

