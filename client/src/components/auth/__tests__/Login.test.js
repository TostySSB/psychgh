import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()})
describe('Login Component renders', () => {
	it('Login renders without crashing', () => {
		shallow(<Login />);
	})
});