import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, SelectMimicry} from '@vkontakte/vkui';
import {RouterContext, games} from '../../App'

import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import { get } from '../../api';
import TournamentItem from "../../components/tournaments/TournamentItem";

const Tournaments = ({ id }) => {
    const {go, game} = useContext(RouterContext);

    const selectedGame = games.find(item => item.id === game);

    // useEffect(() => {
    //     const url = selectedGame ? `api/v1/series?game=${selectedGame.id}`: `api/v1/series`;
    //     get(url).then(data => {
    //         setMatches(data.data);
    //     }).catch((err) => {
    //         console.error('series err', err)
    //     });
    // }, [get, selectedGame]);

    return (
        <Panel id={id}>
            <PanelHeader>Турниры</PanelHeader>
            <TournamentItem />
        </Panel>
    );
}

export default Tournaments;
