import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login'
import { shallow, configure } from 'enzyme';

configure({adapter: new })
describe('Login Component renders', () => {
	it('Login renders without crashing', () => {
		shallow(<Login />);
	})
});