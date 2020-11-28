import React, {useContext, useEffect, useState} from 'react';
import { ScreenSpinner, Separator, Tabs, TabsItem } from '@vkontakte/vkui';
import {Panel, PanelHeader} from '@vkontakte/vkui';
import MatchHeader from "../components/matches/MatchHeader";
import {RouterContext, domain} from '../App';
import MatchRoster from "../components/matches/MatchRoster";
import MatchStats from "../components/matches/MatchStats";
import {get} from "../api";
import BackButton from "../components/BackButton";
import MatchStream from "../components/matches/MatchStream";

const Match = ({id}) => {
    const [activeTab, setActiveTab] = useState('stats');
    const [currentMatch, setCurrentMatch] = useState(null);
    const {go, match, popout, setPopout} = useContext(RouterContext);

    useEffect(() => {
        const url = `${domain}/api/v1/series/${match}`;
        setPopout(<ScreenSpinner/>);
        get(url).then(data => {
            setCurrentMatch(data);
            setPopout(null);
        }).catch((err) => {
            console.error('match err', err);
            setPopout(null);
        });
    }, [match]);

    return (
        <Panel id={id}>
            {currentMatch &&

            <PanelHeader left={<BackButton go={go}
                                           dataTo="matches"/>}>{currentMatch.rosters[0].teams[0].name} vs {currentMatch.rosters[1].teams[0].name}</PanelHeader>
            }
            {currentMatch && <MatchHeader
                bestOf={currentMatch.bestOf}
                matchFormat={currentMatch.title}
                teamHome={currentMatch.rosters[0].teams[0]}
                teamAway={currentMatch.rosters[1].teams[0]}
                match={currentMatch.id}
                scores={currentMatch.scores}
                startTime={currentMatch.start}
                endTime={currentMatch.end}
                teamHomeId={currentMatch.rosters[0].id}
                teamAwayId={currentMatch.rosters[1].id}
                id={currentMatch.id}
            />}
            <Separator wide/>
            <Tabs>
                <TabsItem selected={activeTab === 'stats'} onClick={() => setActiveTab('stats')}>
                    Статистика
                </TabsItem>
                <TabsItem selected={activeTab === 'rosters'} onClick={() => setActiveTab('rosters')}>
                    Составы
                </TabsItem>
            </Tabs>
            {activeTab === 'rosters' && currentMatch &&
            <MatchRoster teamHomeRoster={currentMatch.rosters[0].players}
                         teamAwayRoster={currentMatch.rosters[1].players}/>
            }
            {activeTab === 'stats' &&
            <MatchStats stats={{stats: 'Стата'}}/>
            }
            <MatchStream/>
        </Panel>
    )
};

export default Match;
