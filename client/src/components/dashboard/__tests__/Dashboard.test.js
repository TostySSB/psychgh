import React, { Component } from "react";
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Dashboard} from '../Dashboard';

configure({adapter: new Adapter()});

function dashboardSetup() {
	const props = {
		logoutUser: jest.fn(),
		auth: {
			isAuthenticated: true,
			isPractitioner: false,
			loading: false,
			user: { name: "Henry" }
		},
	}
	const dashboardWrapper = shallow(<Dashboard {...props}/>);
	return {props, dashboardWrapper};
}

describe("Dashboard component renders", () => {
	it("Renders without crashing", () => {
		const { dashboard } = dashboardSetup();
	});
});
