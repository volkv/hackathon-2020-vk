import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {List, Cell} from '@vkontakte/vkui';
import {Panel, PanelHeader} from '@vkontakte/vkui';
import {RouterContext, games} from '../App';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import BackButton from "../components/BackButton";
import TeamLogo from "../components/TeamLogo";
import {Icon24Done} from "@vkontakte/icons";


const GameList = ({go, setGame, game}) => {
    const onClick = id => e => {
        setGame(id);
        go(e);
    };


    return games.map(({id, value, icon}) => {

        return (
            <Cell
                before={
                    <div style={{marginRight: '8px'}}>
                        <TeamLogo background={icon} width={'25px'} height={'25px'}/>
                    </div>
                }
                onClick={onClick(id)}
                data-to='matches'
                asideContent={id === game ? <Icon24Done fill="var(--accent)"/> : null}
                key={id}
            >
                {value}
            </Cell>
        );
    });
}

const Match = ({id}) => {
    const
        {
            go, setGame, game
        }
            = useContext(RouterContext);

    return (
        <Panel
            id={id}>
            <PanelHeader
                left={
                    <BackButton go={go} dataTo="matches"/>
                }>
                Выбор
                игры
            </PanelHeader>
            <Group>
                <List>
                    <GameList go={go} setGame={setGame} game={game}/>
                </List>
            </Group>
        </Panel>
    );
};

export default Match;
