import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import {Login} from '../Login';
import {Register} from '../Register';

configure({adapter: new Adapter()});

function loginSetup() {
	const props = {
		loginUser: jest.fn(),
		auth: {
			isAuthenticated: false,
			loading: false,
			user: {}
		},
		errors: {}
	}
	const loginWrapper = shallow(<Login {...props}/>);
	return {props, loginWrapper};
}

describe('Login Component renders', () => {
	it('Login renders itself', () => {
		const { loginWrapper } = loginSetup();
		expect(loginWrapper.toJSON).toMatchSnapshot();
		
	})
});

function registerSetup() {
	const props = {
		
	}
}