import React from 'react';
import PropTypes from 'prop-types';
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import TeamLogo from "../TeamLogo";

const MatchRoster = ({teamHomeRoster, teamAwayRoster}) => {

    const RosterListItem = ({player}) => {
        return (
            <div key={player.id} className='roster__list-item'>
                <TeamLogo background={player.images.default} height='24px' width='24px' />
                <div className='roster__nick-name'>{player.nick_name}</div>
            </div>
        )
    }

    return (
        <Div>
            <div className='roster__container'>
                <div className='roster__list'>
                    {teamHomeRoster.map(player => {
                        return (
                            <RosterListItem player={player} />
                        )
                    })}
                </div>
                <div className='roster__list'>
                    {teamAwayRoster.map(player => {
                        return (
                            <RosterListItem player={player} />
                        )
                    })}
                </div>
            </div>
        </Div>
    )
};

export default MatchRoster;

