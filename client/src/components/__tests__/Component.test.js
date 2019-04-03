import React, { Component } from "react";
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MenuHandler} from '../MenuHandler';
import {LoginIcon} from '../LoginIcon';

configure({adapter: new Adapter()});
describe('Test LoginIcon and MenuHandler rendering', () => {
	it('MenuHandler renders without crashing', () => {
		const props = {auth: {isAuthenticated: false}};
		expect(shallow(<MenuHandler {...props}/>).exists()).toBe(true);
	});

	it("LoginIcon renders without crashing", () => {
		const props = {auth: {isAuthenticated: false}};
		expect(shallow(<LoginIcon {...props}/>).exists()).toBe(true);
	});
});