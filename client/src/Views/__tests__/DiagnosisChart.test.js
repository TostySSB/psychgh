import React, { Component } from "react";
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DiagnosisChart from '../DiagnosisChart';
import DiagnosisCard from '../../components/UI/cards/DiagnosisCard';

configure({adapter: new Adapter()});
describe("Test rendering for DiagnosisCards", () => {
	it("DiagnosisCard renders without crashing", () => {
		const props = {
			type:"response", 
			idNum:1, onClick: jest.fn(), 
			evalData:{notes:"Some test notes"}
		};
		expect(shallow(<DiagnosisCard {...props}/>).exists()).toBe(true);
	});

	it("Renders the correct DiagnosisCard", () => {
		wrapper = mount()
	})
});