import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {List, Cell, PanelHeaderButton, IOS, platform} from '@vkontakte/vkui';
import {Panel, PanelHeader} from '@vkontakte/vkui';
import {RouterContext, games} from '../App';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import DotaIcon from '../../../public/media/games/1.svg';
import LolIcon from '../../../public/media/games/2.svg';
import CSIcon from '../../../public/media/games/5.svg';
import {Icon24Back, Icon28ChevronBack} from "@vkontakte/icons";

const osName = platform();

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

    const BackBtn = () => (
        <PanelHeaderButton onClick={go} data-to="matches">
            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
        </PanelHeaderButton>
    );

    return (
        <Panel id={id}>
            <PanelHeader left={<BackBtn/>}>
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
