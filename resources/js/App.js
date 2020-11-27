import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {Epic, Root, Tabbar, TabbarItem, View} from '@vkontakte/vkui';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Series from "./panels/Series";
import SeriesSingle from "./panels/SeriesSingle";
import {Icon28MessageOutline, Icon28NewsfeedOutline, Icon28ServicesOutline} from "@vkontakte/icons";

const App = () => {
    const [activePanel, setActivePanel] = useState('home');
    const [activeStory, setActiveStory] = useState('matches');
    const [activeView, setActiveView] = useState('view');
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

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };


    const onStoryChange = e => {
        console.log(e.currentTarget.dataset.story)
        setActiveStory(e.currentTarget.dataset.story);
    }

    return (
        <Epic  activeStory={activeStory} tabbar={
            <Tabbar>
                <TabbarItem
                    onClick={onStoryChange}
                    selected={() => setActiveView('matches')}
                    data-story="matches"
                    text="Новости"
                ><Icon28NewsfeedOutline/></TabbarItem>
                <TabbarItem
                    onClick={onStoryChange}
                    selected={() => setActiveView('view1')}
                    data-story="view1"
                    text="Сервисы"
                ><Icon28ServicesOutline/></TabbarItem>
            </Tabbar>
        }>
            <View id="matches" activePanel='series'>
                <Series id='series' go={go}/>
                <SeriesSingle id='seriesSingle' go={go}/>
            </View>
            <View id='view1' activePanel='home'>
                <Home id='home' fetchedUser={fetchedUser} go={go}/>
            </View>
        </Epic>
    );
}

export default App;

