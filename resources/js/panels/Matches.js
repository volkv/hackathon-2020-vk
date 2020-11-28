import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, SelectMimicry} from '@vkontakte/vkui';
import {RouterContext, games} from '../App'
import Calendar from '../components/Calendar';

import MatchItem from "../components/MatchItem";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import { get } from '../api';
import DateTime from 'luxon/src/datetime.js';

const Matches = ({ id }) => {
    const {go, game, date} = useContext(RouterContext);
    const [matches, setMatches] = useState([]);

    const selectedGame = games.find(item => item.id === game);

    useEffect(() => {
        const params = {};
        if(selectedGame){
            params.game = selectedGame.id;
        }
        if(date){
            params.starts_before = DateTime.fromSeconds(date).plus({day: 1}).toSeconds();
            params.starts_after = date;
        }
        const urlParams = `${new URLSearchParams(params)}`;
        const url = urlParams ? `api/v1/series?${urlParams}`: `api/v1/series`;
        get(url).then(data => {
            setMatches(data.data);
        }).catch((err) => {
            console.log('series err', err)
        });
    }, [selectedGame, date]);

    return (
        <Panel id={id}>
            <PanelHeader>Матчи</PanelHeader>
            <FormLayout>
                <SelectMimicry top="Выберите игру" placeholder="Не выбрана" data-to="gamesFilter" onClick={go}>
                    {selectedGame? selectedGame.value : selectedGame}
                </SelectMimicry>
                <Calendar/>
            </FormLayout>
            {matches.filter(item => item.rosters.length).map(item => {
                return (
                    <MatchItem
                        key={item.id}
                        teamHome={item.rosters[0].teams[0]}
                        teamAway={item.rosters[1].teams[0]}
                        match={item.id}
                        scores={item.scores}
                        startTime={item.start}
                        endTime={item.end}
                        teamHomeId={item.rosters[0].id}
                        teamAwayId={item.rosters[1].id}
                    />
                )
            })}
        </Panel>
    );
}

Matches.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Matches;
