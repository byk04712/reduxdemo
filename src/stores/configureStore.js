import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import reducers from '../reducers';


const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;


const logger = createLogger({
	predicate: (getState, action) => isDebuggingInChrome,
	collapsed: true,
	duration: true
});

let middlewares = [

];

if (isDebuggingInChrome) {
	middlewares.push(logger);
}

export default function configureStore(initialState) {
	const store = applyMiddleware(
		...middlewares
	)(createStore)(reducers, initialState);

	console.log('initialState=', store.getState());
	return store;
}

