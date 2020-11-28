import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {List, Cell, PanelHeaderClose} from '@vkontakte/vkui';
import {Panel, PanelHeader} from '@vkontakte/vkui';
import {RouterContext, games} from '../App';
import Group from "@vkontakte/vkui/dist/components/Group/Group";

const GameList = ({go, setGame}) => {
    const onClick = id => e => {
        setGame(id);
        go(e);
    };


    return games.map(({id, value, icon}) => {

        return (
            <Cell
                before={<img width={24} height={24} src={icon} />}
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
            <PanelHeader left={<PanelHeaderClose />}>
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
