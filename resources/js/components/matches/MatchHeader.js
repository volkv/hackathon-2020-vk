import React, {useEffect, useState} from 'react';
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import TeamLogo from "../TeamLogo";
import {Button, Snackbar} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {Icon16Done} from "@vkontakte/icons";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import {DateTime, Duration} from "luxon";


const MatchHeader = ({teamHome, teamAway, startTime, endTime, scores, teamHomeId, teamAwayId, matchFormat, bestOf, id}) => {

    const [snackBar, setSnackBar] = useState(null);

    const [fav, setFav] = useState('secondary');

    useEffect(() => {
        async function fetchData() {
            let favStorage = await bridge.send('VKWebAppStorageGet', {
                keys: ['fav-' + id]
            })

            let isFav = favStorage.keys[0].value

            setFav(isFav ? 'commerce' : 'secondary')

        }

        fetchData()
    })

    const switchFav = async () => {

        let favStorage = await bridge.send('VKWebAppStorageGet', {
            keys: ['fav-' + id]
        })

        let isFav = favStorage.keys[0].value

        if (!isFav) {
            await bridge.send('VKWebAppStorageSet', {
                key: 'fav-' + id,
                value: '1'
            });
        } else {
            await bridge.send('VKWebAppStorageSet', {
                key: 'fav-' + id,
                value: '0'
            });
        }

        let message = isFav ? 'Матч удален из избранного' : 'Матч добавлен в избранное';
        let background = isFav ? 'var(--dynamic_red)' : 'var(--dynamic_green)';

        setSnackBar(<Snackbar
                layout='vertical'
                onClose={() => setSnackBar(null)}
                before={<Avatar size={24} style={{backgroundColor: background}}><Icon16Done fill='#fff' width={14}
                                                                                            height={14}/></Avatar>}
                duration={900}
            >
                {message}
            </Snackbar>
        );

    }

    const share = () => bridge.send("VKWebAppShare", {"link": "https://vk.com/app7680133"})

    const time = DateTime.fromSQL(startTime);
    const timeDuration = Duration.fromObject(time.toObject());
    const currentTime = Duration.fromObject(DateTime.local().toObject());
    const {days} = timeDuration.minus(currentTime).toObject();
    let timeCaption = '';
    if(days === 0){
        timeCaption = `сегодня в ${time.toFormat('HH:mm')}`;
    } else {
        timeCaption = time.setLocale('ru').toLocaleString(({ weekday: 'long', month: 'long', day: '2-digit' }));
    }

    return (
        <Div>
            <div className="match-header">
                <div className="match-header__top">
                    <div className="match-header__tournament">ESL 2020</div>
                    <div className="match-header__tournament-format">{matchFormat}. Best of {bestOf}</div>
                    <div className="match-header__date">{timeCaption}</div>
                </div>

                <div className="match-header__teams">
                    <div className="match-header__score">
                        {scores[teamHomeId]} : {scores[teamAwayId]}
                    </div>
                    <div className="match-header__team">
                        <div className="match-header__team-logo"><TeamLogo width={"85px"} height={"85px"}
                                                                           background={teamHome.images.default}/></div>
                        <div className="match-header__team-name">{teamHome.name}</div>
                    </div>
                    <div className="match-header__team">
                        <div className="match-header__team-logo"><TeamLogo width={"85px"} height={"85px"}
                                                                           background={teamAway.images.default}/></div>
                        <div className="match-header__team-name">{teamAway.name}</div>
                    </div>
                </div>
                <div className="match-header__buttons">
                    <Button onClick={share}>Поделиться</Button>
                    <Button mode={fav} onClick={switchFav}>{fav === 'commerce' ? 'В избранном' : 'Добавить в избранное'}</Button>
                </div>
            </div>
            {snackBar}
        </Div>

    )
};

export default MatchHeader;

