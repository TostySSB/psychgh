import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Login} from '../auth/Login';
import Register from '../auth/Register';
import Dashboard from '../dashboard/Dashboard';
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


describe('test all components', () => {
	it('Landing Renders', () => {
		shallow(<Landing />);
	});

	it('Navbar Renders', () => {
		shallow(<Navbar />)
	});
});

//Register component
// it("Register renders without crashing", () => {
// 	const div = document.createElement('div');
// 	ReactDOM.render(<Register />, div);
// 	ReactDOM.unmountComponentAtNode(div);
// });
