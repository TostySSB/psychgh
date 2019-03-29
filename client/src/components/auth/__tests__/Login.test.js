import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ReactDOM from 'react-dom';
import {Login} from '../Login';

configure({adapter: new Adapter()});
describe('Login Component renders', () => {
	it('Login renders without crashing', () => {
		shallow(<Login />);
	})
});