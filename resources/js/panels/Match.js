import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import {Panel, PanelHeader, PanelHeaderButton} from '@vkontakte/vkui';
import {Icon28ChevronBack,Icon24Back } from '@vkontakte/icons';
import MatchHeader from "../components/matches/MatchHeader";
import {RouterContext} from '../App';

const osName = platform();

const Match = ({id})=> {
    const {go} = useContext(RouterContext);

    const BackBtn = () => (
        <PanelHeaderButton onClick={go} data-to="matches">
            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
        </PanelHeaderButton>
    );

    return (
        <Panel id={id}>
            <PanelHeader left={<BackBtn/>}>Матч</PanelHeader>
            <MatchHeader team_1='NAVI' team_2='VP' />
        </Panel>
    )
}

Match.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Match;
