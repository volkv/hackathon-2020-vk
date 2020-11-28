import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {Epic, Tabbar, TabbarItem, View, Panel} from '@vkontakte/vkui';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Matches from "./panels/Matches";
import Match from "./panels/Match";
import {Icon28NewsfeedOutline, Icon28ServicesOutline} from "@vkontakte/icons";
import GamesFilter from "./panels/GamesFilter";
import DotaIcon from '../../public/media/games/1.svg';
import LolIcon from '../../public/media/games/2.svg';
import CSIcon from '../../public/media/games/5.svg';
import Tournaments from "./panels/tournaments/Tournaments";
import Tournament from "./panels/tournaments/Tournament";


export const RouterContext = React.createContext({
    panel: 'home',
    story: 'matches',
    view: 'view',
    go: null,
    game: null,
    setGame: null,
    match: null,
    setMatches: null,
    date: null,
    setDate: null,
    chosen: null,
    setChosen: null,
});

export const games = [
    {id: 1, value: 'Dota 2', icon: DotaIcon},
    {id: 2, value: 'LOL', icon: LolIcon},
    {id: 5, value: 'CS:GO', icon: CSIcon}
];

const App = () => {
    const [activeStory, setActiveStory] = useState('matches');
    const [activeView, setActiveView] = useState('tournaments');
    const [activePanel, setActivePanel] = useState('matches');
    const [game, setGame] = useState(null);
    const [fetchedUser, setUser] = useState(null);
    const [match, setMatch] = useState(null);
    const [date, setDate] = useState(null);
    const [chosen, setChosen] = useState(null);

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

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };


    const onStoryChange = e => {
        setActiveStory(e.currentTarget.dataset.story);
        setActiveView(e.currentTarget.dataset.story);
        setActivePanel(e.currentTarget.dataset.story);
    };

    const value = {panel: activePanel, story: activeStory, view: activeView, go, setGame, game, match, setMatch, date, setDate, chosen, setChosen};

    return (
        <RouterContext.Provider value={value}>
            <Epic activeStory={activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={onStoryChange}
                        selected={activeView === 'matches'}
                        data-story="matches"
                        text="Матчи"
                    ><Icon28NewsfeedOutline/></TabbarItem>
                    <TabbarItem
                        onClick={onStoryChange}
                        selected={activeView === 'tournaments'}
                        data-story="tournaments"
                        text="Турниры"
                    ><Icon28ServicesOutline/></TabbarItem>
                </Tabbar>
            }>
                <View id="matches" activePanel={activePanel}>
                    <Matches id="matches" />
                    <Match id='match'/>
                    <GamesFilter id="gamesFilter" />
                </View>
                <View id='tournaments' activePanel={activePanel}>
                    <Tournaments id='tournaments' />
                    <Tournament id='tournament' />
                </View>
            </Epic>
        </RouterContext.Provider>
    );
};

export default App;

