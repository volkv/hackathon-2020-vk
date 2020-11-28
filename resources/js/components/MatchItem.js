import React, {useContext} from 'react';
import { Div } from "@vkontakte/vkui";
import { RouterContext } from '../App';
import '../../css/match.css'
import TeamLogo from "./TeamLogo";
import { DateTime, Duration } from 'luxon';

const Match = ({teamHome, teamAway, startTime, endTime, scores, match, teamHomeId, teamAwayId, gameIcon}) => {
    const {go, setMatch} = useContext(RouterContext);

    const onClick = (e) => {
        setMatch(match);
        go(e);
    };

    const time = DateTime.fromSQL(startTime);
    const timeDuration = Duration.fromObject(time.toObject());
    const currentTime = Duration.fromObject(DateTime.local().toObject());
    const {days} = timeDuration.minus(currentTime).toObject();
    let timeCaption = '';
    if(days === 0){
        timeCaption = `сегодня в ${time.toFormat('HH:mm')}`;
    } else {
        timeCaption = time.toLocaleString(({ weekday: 'long', month: 'long', day: '2-digit' }));
    }

    return (
        <Div onClick={onClick} data-to="match" className="match__row">
            <div className="match__game">
                <TeamLogo background={gameIcon} width={'25px'} height={'25px'}/>
            </div>
            <div className="match__teams">
                <div className="match__team">
                    <TeamLogo background={teamHome.images.default}/>
                    <div>
                        {teamHome.name}
                    </div>
                </div>
                <div className="match__score">
                    <div>{scores[teamHomeId]} : {scores[teamAwayId]}</div>
                </div>
                <div className="match__team">
                    <TeamLogo background={teamAway.images.default}/>
                    <div>
                        {teamAway.name}
                    </div>
                </div>
            </div>
            <div className="match__date">
                {timeCaption}
            </div>
        </Div>
    );
};

export default Match;

