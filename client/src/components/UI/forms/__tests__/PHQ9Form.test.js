import React, { Component } from "react";
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PHQ9Form} from '../PHQ9Form';

configure({adapter: new Adapter()});

describe('The PHQ9Form does the things', () => {
	it('Does the thing', () => {
		
	});
});