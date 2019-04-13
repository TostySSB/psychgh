import React, { Component } from "react";
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import axios from "axios";
import Adapter from 'enzyme-adapter-react-16';
import DepressionChart from '../DepressionChart';

configure({adapter: new Adapter()});
describe('DepressionChart rendering', () => {
	it("DepressionChart renders without crashing", () => {
		expect(shallow(<DepressionChart />).exists()).toBe(true);
	});
});