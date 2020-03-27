import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Web3ReactManager from 'components/Web3ReactManager';
import Header from 'components/Common/Header';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const App = () => {
    const renderViews = () => {
        return (
            <div className="app-shell">
                <Switch></Switch>
            </div>
        );
    };

    return (
        <Web3ReactManager>
            <HashRouter>
                <Header />
                <Container>{renderViews()}</Container>
            </HashRouter>
        </Web3ReactManager>
    );
};

export default App;
