import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Separator, Tabs, TabsItem} from '@vkontakte/vkui';
import {Panel, PanelHeader} from '@vkontakte/vkui';
import MatchHeader from "../components/matches/MatchHeader";
import {RouterContext} from '../App';
import MatchRoster from "../components/matches/MatchRoster";
import MatchStats from "../components/matches/MatchStats";
import {get} from "../api";
import BackButton from "../components/BackButton";

const Match = ({id}) => {
    const [activeTab, setActiveTab] = useState('stats');
    const [currentMatch, setCurrentMatch] = useState(null);
    const {go, match} = useContext(RouterContext);

    useEffect(() => {
        const url = `api/v1/series/${match}`;
        get(url).then(data => {
            setCurrentMatch(data)
        }).catch((err) => {
            console.error('series err', err)
        });
    }, [match]);

    return (
        <Panel id={id}>
            <PanelHeader left={<BackButton go={go} dataTo="matches"/>}>Матч</PanelHeader>
            {currentMatch && <MatchHeader
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
                <TabsItem
                    selected={activeTab === 'stats'}
                    onClick={() => setActiveTab('stats')}
                >Статистика</TabsItem>
                <TabsItem
                    selected={activeTab === 'rosters'}
                    onClick={() => setActiveTab('rosters')}
                >Составы</TabsItem>
            </Tabs>
            {activeTab === 'rosters' && currentMatch &&
            <MatchRoster teamHomeRoster={currentMatch.rosters[0].players}
                         teamAwayRoster={currentMatch.rosters[1].players}/>
            }
            {activeTab === 'stats' &&
            <MatchStats stats={{stats: 'Стата'}}/>
            }
            <iframe src="https://player.twitch.tv/?channel=dota2ruhub&parent=vk-cyber.volkv.com" frameBorder="0"
                    allowFullScreen="true" scrolling="no" height="378" width="620"></iframe>
        </Panel>
    )
}

Match.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Match;
