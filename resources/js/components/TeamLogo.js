import React from 'react';
import PropTypes from 'prop-types';

const TeamLogo = ({background, width, height}) => {
    const logoStyle = {
        width: width ? width : "45px",
        height: height ? height : "45px",
    };
    const spanStyle = {
        background: background ? `url("${background}") center center / cover no-repeat rgb(249, 249, 249)` : ''
    };
    return (
        <div className="team__logo" style={logoStyle}>
            <div className='team__image'>
                <span style={spanStyle} />
            </div>
        </div>
    )
};

TeamLogo.propTypes = {
    background: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export default TeamLogo;

