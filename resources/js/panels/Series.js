import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import MatchItem from "../components/MatchItem";

const osName = platform();

const Series = ({ id, go }) => (
    <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Матчи
        </PanelHeader>
        <MatchItem match={{team_1: 'NAVI', team_2: "VP"}} href={go} dataTo="seriesSingle"/>
        <MatchItem match={{team_1: 'NAVI', team_2: "VP"}} href={go} dataTo="seriesSingle" />
        <MatchItem match={{team_1: 'NAVI', team_2: "VP"}} href={go} dataTo="seriesSingle" />
    </Panel>
);

Series.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Series;
