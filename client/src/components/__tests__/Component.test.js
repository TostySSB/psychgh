import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Login} from '../auth/Login';
import {Register} from '../auth/Register';
import {Dashboard} from '../dashboard/Dashboard';
import Landing from '../layout/Landing';
import Navbar from '../layout/Navbar';

// Test all components for rendering without crashing
configure({adapter: new Adapter()});

// function setup() {
// 	const props = {
// 		addTodo: jest.fn()
// 	};
// 	const enzymeWrapper = shallow(<Landing />)
// 	return {props, enzymeWrapper};
// }

// Test layout components
describe('Test layout components', () => {
	it('Landing Renders', () => {
		// shallow(<Landing />);
		const LandingComponent = renderer.create(<Landing />).toJSON();
		expect(LandingComponent).toMatchSnapshot();
	});

	it('Navbar Renders', () => {
		shallow(<Navbar />)
	});
});

// Test 
