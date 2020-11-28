import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, List, Cell} from '@vkontakte/vkui';
import {Panel, PanelHeader, PanelHeaderButton} from '@vkontakte/vkui';
import {Icon28ChevronBack, Icon24Back} from '@vkontakte/icons';
import MatchHeader from "../components/matches/MatchHeader";
import {RouterContext} from '../App';
import Group from "@vkontakte/vkui/dist/components/Group/Group";

const osName = platform();

const Match = ({id}) => {
    const {go} = useContext(RouterContext);

    return (
        <Panel id={id}>
            <PanelHeader>
                Выбор игры
            </PanelHeader>
            <Group>
                <List>
                    <Cell
                        onClick={go}
                        data-to='matches'
                        asideContent='Dota 2'
                    >
                        Dota 2
                    </Cell>
                    <Cell
                        onClick={go}
                        data-to='matches'
                        asideContent='CS:GO'
                    >
                        CS:GO
                    </Cell>
                </List>
            </Group>
        </Panel>
    );
}

Match.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Match;
