'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import App from './layouts/App';
import configureStore from './stores/configureStore';

const store = configureStore();


/**
 * 主框架
 */
class Index extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<App/>
			</Provider>
		);
	}
	
}

module.exports = Index;