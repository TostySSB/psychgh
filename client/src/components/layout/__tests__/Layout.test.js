import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Landing from '../Landing';
import Navbar from '../Navbar';

// Test all layout components for rendering without crashing
configure({adapter: new Adapter()});

describe('Layout component rendering', () => {
	it('Landing renders without crashing', () => {
		shallow(<Landing />);
	});

	it('Navbar renders witout crashing', () => {
		shallow(<Navbar />)
	});
});
