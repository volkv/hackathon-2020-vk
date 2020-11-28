import React, { useContext, useEffect, useState } from 'react';
import {Panel, PanelHeader, ScreenSpinner} from '@vkontakte/vkui';
import {RouterContext} from '../../App'

import { get } from '../../api';
import TournamentItem from "../../components/tournaments/TournamentItem";

const Tournaments = ({ id }) => {
    const {setPopout, popout} = useContext(RouterContext);
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        setPopout(<ScreenSpinner/>);
        get('api/v1/tournaments').then(({data}) => {
            setPopout(null);
            setTournaments(data)
        }).catch((err) => {
            console.error('tournaments err', err);
            setPopout(null);
        });
    }, []);

    return (
        <Panel id={id}>
            <PanelHeader>Турниры</PanelHeader>
            {popout ? null : tournaments.map(({title, id, start, end, images}) => {
                return (
                    <TournamentItem key={id} title={title} start={start} end={end} logo={images.default}/>
                );
            })}
        </Panel>
    );
};

export default Tournaments;
