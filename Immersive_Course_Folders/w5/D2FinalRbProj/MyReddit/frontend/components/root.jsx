import React from 'react';
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import SubsContainer from './subs/sub_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <SubsContainer />
        </HashRouter>
    </Provider>
)

export default Root;