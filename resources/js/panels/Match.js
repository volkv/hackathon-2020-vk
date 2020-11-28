import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {platform, IOS, FixedLayout, Separator, Tabs, TabsItem, TabbarItem} from '@vkontakte/vkui';
import {Panel, PanelHeader, PanelHeaderButton} from '@vkontakte/vkui';
import {Icon28ChevronBack, Icon24Back} from '@vkontakte/icons';
import MatchHeader from "../components/matches/MatchHeader";
import {RouterContext} from '../App';
import MatchRoster from "../components/matches/MatchRoster";
import MatchStats from "../components/matches/MatchStats";

const osName = platform();

const Match = ({id}) => {
    const [activeTab, setActiveTab] = useState('stats');
    console.log(activeTab)

    const {go} = useContext(RouterContext);
    const BackBtn = () => (
        <PanelHeaderButton onClick={go} data-to="matches">
            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
        </PanelHeaderButton>
    );

    return (
        <Panel id={id}>
            <PanelHeader left={<BackBtn/>}>Матч</PanelHeader>
            <MatchHeader team_1='NAVI' team_2='VP'/>
            <Separator wide/>
            <Tabs>
                <TabsItem
                    selected={activeTab === 'stats'}
                    onClick={() => setActiveTab('stats')}
                >Статистика</TabsItem>
                <TabsItem
                    selected={activeTab === 'rosters'}
                    onClick={() => setActiveTab('rosters')}
                >Составы</TabsItem>
            </Tabs>
            {activeTab === 'rosters' &&
            <MatchRoster roster={{roster: 'Состав'}}/>
            }
            {activeTab === 'stats' &&
            <MatchStats stats={{stats: 'Стата'}}/>
            }

        </Panel>
    )
}

Match.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Match;
