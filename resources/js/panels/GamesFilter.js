import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {List, Cell} from '@vkontakte/vkui';
import {Panel, PanelHeader} from '@vkontakte/vkui';
import {RouterContext, games} from '../App';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import BackButton from "../components/BackButton";


const GameList = ({go, setGame}) => {
    const onClick = id => e => {
        setGame(id);
        go(e);
    };


    return games.map(({id, value, icon}) => {

        return (
            <Cell
                before={<img width={24} height={24} src={icon} alt='game-icon'/>}
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
            <PanelHeader left={<BackButton go={go} dataTo="matches"/>}>
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
