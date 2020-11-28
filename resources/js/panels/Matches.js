import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, SelectMimicry} from '@vkontakte/vkui';
import {RouterContext} from '../App'

import MatchItem from "../components/MatchItem";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";

const matches = [
    {id: 1, team_1: 'NAVI', team_2: "VP", team1_score: '2', team2_score: '0'},
    {id: 2, team_1: 'NAVI', team_2: "VP", team1_score: '2', team2_score: '0'},
    {id: 3, team_1: 'NAVI', team_2: "VP", team1_score: '2', team2_score: '0'},
];

const Matches = ({ id }) => {
    const {go} = useContext(RouterContext);

    return (
        <Panel id={id}>
            <PanelHeader>Матчи</PanelHeader>
            <FormLayout>
                <SelectMimicry
                    top="Выберите страну"
                    placeholder="Не выбрана"
                    data-to="gamesFilter"
                    onClick={go}
                >1</SelectMimicry>
            </FormLayout>
            {matches.map(item => {
                return (
                    <MatchItem key={item.id} match={item} href={go} dataTo="match" />
                )
            })}
        </Panel>
    );
}

Matches.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Matches;
