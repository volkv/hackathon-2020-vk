import React, {useContext, useEffect, useState} from 'react';
import {platform, IOS, FixedLayout, Separator, Tabs, TabsItem, TabbarItem} from '@vkontakte/vkui';
import {Panel, PanelHeader, PanelHeaderButton} from '@vkontakte/vkui';
import {Icon28ChevronBack, Icon24Back} from '@vkontakte/icons';

const osName = platform();

const Tournament = ({id}) => {
    const {go} = useContext(RouterContext);

    // useEffect(() => {
    //     const url = `api/v1/series/${match}`;
    //     get(url).then(data => {
    //         setCurrentMatch(data)
    //     }).catch((err) => {
    //         console.error('series err', err)
    //     });
    // },[match]);

    const BackBtn = () => (
        <PanelHeaderButton onClick={go} data-to="tournaments">
            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
        </PanelHeaderButton>
    );

    return (
        <Panel id={id}>
            <PanelHeader left={<BackBtn/>}>Турнир</PanelHeader>
            <Separator wide/>
        </Panel>
    )
}

export default Tournament;
