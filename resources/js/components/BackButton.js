import React from 'react';
import {IOS, PanelHeaderButton, platform} from "@vkontakte/vkui";
import {Icon24Back, Icon28ChevronBack} from "@vkontakte/icons";

const BackButton = ({go, dataTo}) => {
    const osName = platform();

    return (
        <PanelHeaderButton onClick={go} data-to={dataTo}>
            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
        </PanelHeaderButton>
    )
};

export default BackButton;

