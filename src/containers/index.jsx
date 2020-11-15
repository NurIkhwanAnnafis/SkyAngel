/* eslint-disable no-restricted-globals */
import React, { Component, Fragment } from 'react';
import { insertData } from '../helpers/insertJSON';
import ModalListScore from './ModalListScore';
import ModalScore from './ModalScore';
import View from './View';

let enemySpawn = 0;
let parachuteSpawn = 0;
let starSpawn = 0;

class Index extends Component {
    state = {
        timer: 10,
        score: 0,
        isStart: false,
        visible: false,
        visibleScore: false
    }

    removeElement(e, elementId) {
        // Removes an element from the document
        const element = document.getElementById(elementId);

        element && element.parentNode.removeChild(element);
    }

    countDownTimer = () => {
        const { timer } = this.state;
        if(timer > 0){
            this.setState({ timer: timer - 1 });
        } else {
            this.setState({ visible: true });
            clearInterval(this.Countdown);
            clearInterval(this.interval);
            clearInterval(this.interval2);
            clearInterval(this.interval3);
            removeEventListener('keydown', this.evenetListener);
        }
    }

    spawnEnemies = () => {
        let parent = document.createElement('img');
        parent.id = `enemy_${enemySpawn}`;
        parent.src = 'https://cdn.iconscout.com/icon/free/png-512/bird-299-1131175.png';
        parent.className = `enemy`;
        parent.alt = 'enemy';
        const posY = Math.floor(Math.random() * 400) + 50;
        parent.style = `top: ${posY}px !important;`
        enemySpawn++;
        document.getElementById('App-header').appendChild(parent);
        document.getElementById(parent.id).addEventListener('animationend', e => this.removeElement(e, parent.id));
    }

    spawnParachute = () => {
        let parent = document.createElement('img');
        parent.id = `parachute_${parachuteSpawn}`;
        parent.src = 'https://image.flaticon.com/icons/png/512/99/99367.png';
        parent.className = `power-ups`;
        parent.alt = 'parachute';
        const posX = Math.floor(Math.random() * 1300) + 66;
        parent.style = `left: ${posX}px !important;`
        parachuteSpawn++;
        document.getElementById('App-header').appendChild(parent);
        document.getElementById(parent.id).addEventListener('animationend', e => this.removeElement(e, parent.id));
    }

    spawnStar = () => {
        let parent = document.createElement('img');
        parent.id = `power_${starSpawn}`;
        parent.src = 'https://image.flaticon.com/icons/png/512/130/130188.png';
        parent.className = `power-ups`;
        parent.alt = 'enemy';
        const posX = Math.floor(Math.random() * 1300) + 66;
        parent.style = `left: ${posX}px !important;`
        starSpawn++;
        document.getElementById('App-header').appendChild(parent);
        document.getElementById(parent.id).addEventListener('animationend', e => this.removeElement(e, parent.id));
    }

    handleKeyboard = e => {
        const Player = document.getElementById('Player');

        let tempTop = parseFloat(Player.style.top);
        let tempLeft = parseFloat(Player.style.left);

        setInterval(frame(e.keyCode), 5)

        function frame(input){
            // ArrowLeft
            if (input === 37) {
                Player.style.left = `${tempLeft-1}%`;
            } else
            // ArrowUp
            if (input === 38) {
                Player.style.top = `${tempTop-1}%`;
            } else
            // ArrowRight
            if (input === 39) {
                Player.style.left = `${tempLeft+1}%`;
            } else
            // ArrowBottom
            if (input === 40) {
                Player.style.top = `${tempTop+1}%`;
            }
        }
    }

    handleStartGame = () => {
        this.evenetListener = addEventListener('keydown', e => this.handleKeyboard(e));
        this.interval = setInterval(() => this.spawnEnemies(), 1000 * (Math.floor(Math.random() * 5) + 1));
        this.interval2 = setInterval(() => this.spawnParachute(), 1000 * (Math.floor(Math.random() * 5) + 1));
        this.interval3 = setInterval(() => this.spawnStar(), 1000 * (Math.floor(Math.random() * 5) + 1));
        this.Countdown = setInterval(() => this.countDownTimer(), 1000);
    }

    handleButtonStart = () => {
        this.setState({ isStart: true });

        const player = document.getElementById('Player');
        player.className = 'App-logo player-a';

        setTimeout(this.handleStartGame, 3000);
    }

    handleButtonListScore = () => {
        this.setState({ visibleScore: true });
    }
    
    handleOk = e => {
        const formData = {
            name: e.username === '' ? 'unidentified user' : e.username,
            score: parseInt(e.score) || 0
        };
        insertData(formData);
        this.setState({ timer: 10, visible: false, isStart: false })
        this.handleCancel();
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleOkScore = e => {
        this.handleCancelScore();
    };

    handleCancelScore = () => {
        this.setState({ visibleScore: false });
    };

    render(){
        const otherFunction = {
            handleButtonStart: this.handleButtonStart,
            handleButtonListScore: this.handleButtonListScore
        }
        const otherFunctionModal = {
            handleOk: this.handleOk,
            handleCancel: this.handleCancel
        }
        const otherFunctionModalScore = {
            handleOkScore: this.handleOkScore,
            handleCancelScore: this.handleCancelScore
        }
        return (
            <Fragment>
                <View {...this.props} {...this.state} {...otherFunction} />
                <ModalScore {...this.props} {...this.state} {...otherFunctionModal} />
                <ModalListScore {...this.props} {...this.state} {...otherFunctionModalScore} />
            </Fragment>
        ) 
    }
}

export default Index;