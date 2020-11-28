import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {Epic, Root, Tabbar, TabbarItem, View, Panel} from '@vkontakte/vkui';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Matches from "./panels/Matches";
import Match from "./panels/Match";
import {Icon28MessageOutline, Icon28NewsfeedOutline, Icon28ServicesOutline} from "@vkontakte/icons";
import GamesFilter from "./panels/GamesFilter";
import {get} from './api';


export const RouterContext = React.createContext({
    panel: 'home',
    story: 'matches',
    view: 'view',
    go: null,
    setGame: null,
});

const App = () => {
    const [activeStory, setActiveStory] = useState('matches');
    const [activeView, setActiveView] = useState('view');
    const [activePanel, setActivePanel] = useState('matches');
    const [game, setGame] = useState(null);
    const [fetchedUser, setUser] = useState(null);

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme');
                schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                document.body.attributes.setNamedItem(schemeAttribute);
            }
        });

        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
        }

        fetchData();
    }, []);

    useEffect(() => {
        const url = game ? `api/v1/series?game=${game}`: `api/v1/series`;
        get(url).then(data => {
            console.log('data', data);
        }).catch((err) => {
            console.log('series err', err)
        });
    }, [get, game]);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };


    const onStoryChange = e => {
        setActiveStory(e.currentTarget.dataset.story);
    }

    const value = {panel: activePanel, story: activeStory, view: activeView, go: go, setGame: setGame};

    return (
        <RouterContext.Provider value={value}>
            <Epic activeStory={activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={onStoryChange}
                        selected={() => setActiveView('matches')}
                        data-story="matches"
                        text="Матчи"
                    ><Icon28NewsfeedOutline/></TabbarItem>
                    <TabbarItem
                        onClick={onStoryChange}
                        selected={() => setActiveView('view1')}
                        data-story="view1"
                        text="Турниры"
                    ><Icon28ServicesOutline/></TabbarItem>
                </Tabbar>
            }>
                <View id="matches" activePanel={activePanel}>
                    <Matches id="matches" />
                    <Match id='match'/>
                    <GamesFilter id="gamesFilter" />
                </View>
                <View id='match' activePanel='home'>
                    <Home id='home' fetchedUser={fetchedUser} />
                </View>
            </Epic>
        </RouterContext.Provider>
    );
}

export default App;

