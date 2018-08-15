import React from 'react';
import logo from '../assets/images/nba-logoman-word-white.svg';
import logo_USC from '../assets/images/PrimShield-Word_RegShieldRGB_CardOnWhite.jpg';

export class TopNavBar extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <span className="message">Welcome to Chang's demo site</span>
                    <img src={logo_USC} className="USC-logo" alt="logo_USC" />
                </div>
            </header>
        );
    }
}
