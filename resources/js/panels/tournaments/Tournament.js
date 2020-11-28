import React, {useContext, useEffect, useState} from 'react';
import {Separator, Tabs, TabsItem} from '@vkontakte/vkui';
import {Panel, PanelHeader} from '@vkontakte/vkui';
import {RouterContext} from '../../App';
import TournamentHeader from "../../components/tournaments/TournamentHeader";
import TournamentBracket from "../../components/tournaments/TournamentBracket";
import TournamentMatches from "../../components/tournaments/TournamentMatches";
import BackButton from "../../components/BackButton";

const Tournament = ({id}) => {
    const [activeTab, setActiveTab] = useState('bracket');
    const {go} = useContext(RouterContext);

    // useEffect(() => {
    //     const url = `api/v1/series/${match}`;
    //     get(url).then(data => {
    //         setCurrentMatch(data)
    //     }).catch((err) => {
    //         console.error('series err', err)
    //     });
    // },[match]);

    return (
        <Panel id={id}>
            <PanelHeader left={<BackButton go={go} dataTo="tournaments" />}>Турнир</PanelHeader>
            <Separator wide/>
            <TournamentHeader />
            <Separator wide/>
            <Tabs>
                <TabsItem
                    selected={activeTab === 'bracket'}
                    onClick={() => setActiveTab('bracket')}
                >Турнирная сетка</TabsItem>
                <TabsItem
                    selected={activeTab === 'matches'}
                    onClick={() => setActiveTab('matches')}
                >Матчи</TabsItem>
            </Tabs>
            {activeTab === 'bracket' &&
            <TournamentBracket />
            }
            {activeTab === 'matches' &&
            <TournamentMatches/>
            }
        </Panel>
    )
}

export default Tournament;
