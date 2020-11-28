import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {List, Cell} from '@vkontakte/vkui';
import {Panel, PanelHeader} from '@vkontakte/vkui';
import {RouterContext} from '../App';
import Group from "@vkontakte/vkui/dist/components/Group/Group";

const games = [
    {id: 1, value: 'Dota 2', icon: ''},
    {id: 2, value: 'LOL', icon: ''},
    {id: 5, value: 'CS:GO', icon: ''}
];

const GameList = ({go, setGame}) => {
    const onClick = id => e => {
        setGame(id);
        go(e);
    };


    return games.map(({id, value, icon}) => {
        return (
            <Cell
                onClick={onClick(id)}
                data-to='matches'
                asideContent={value}
                key={id}
            >
                {value}
            </Cell>
        );
    });
}

const Match = ({id}) => {
    const {go, setGame} = useContext(RouterContext);

    return (
        <Panel id={id}>
            <PanelHeader>
                Выбор игры
            </PanelHeader>
            <Group>
                <List>
                    <GameList go={go} setGame={setGame}/>
                </List>
            </Group>
        </Panel>
    );
}

Match.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Match;
