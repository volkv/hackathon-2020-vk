import React, {useState} from 'react';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import {Separator} from "@vkontakte/vkui";
import Icon28ChevronDownOutline from '@vkontakte/icons/dist/28/chevron_down_outline';

const MatchStream = () => {

    const [streamState, setStreamState] = useState(false)
    const [iconStyle, setIconStyle] = useState({transform: 'rotate(0deg)'})
    const onClick = () => {
        if (streamState) {
            setStreamState(false)
            setIconStyle({transform: 'rotate(0deg)'})
        } else {
            setStreamState(true)
            setIconStyle({transform: 'rotate(180deg)'})
        }
    }

    return (
        <Div>
            <Separator wide/>
            <div onClick={onClick} className='match__stream-container'>
                <div>Трансляция</div>
                <Icon28ChevronDownOutline style={iconStyle}/>
            </div>
            {streamState &&
            <iframe src="//vk.com/video_ext.php?oid=-129098239&id=456239466&hash=251d35f224aeea3d&hd=2" width="100%"
                    height="300" frameBorder="0" allowFullScreen></iframe>}
        </Div>
    )
};

export default MatchStream;

