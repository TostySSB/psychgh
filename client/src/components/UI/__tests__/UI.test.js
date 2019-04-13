import React, { Component } from "react";
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DiagnosisCard from '../cards/DiagnosisCard';
import GitHubCard from '../cards/GitHub';
import ReadDocsCard from '../cards/readDocs';
import PatientBio from '../cards/PatientBio';
import DiagnosisGrid from '../grids/DiagnosisGrid';
import HomePageGrid from '../grids/HomePageGrid';
import PatientExplorationGrid from '../grids/PatientExplorationGrid';

configure({adapter: new Adapter()});

describe("Test rendering for all UI Cards", () => {
	it('DiagnosisCard renders without crashing', () => {
		const diagnosisCard = shallow(<DiagnosisCard />);
		expect(diagnosisCard.exists()).toBe(true);
	});

	it('GitHubCard renders without crashing', () => {
		const githubCard = shallow(<GitHubCard />);
		expect(githubCard.exists()).toBe(true);
	});

	it('ReadDocsCard renders without crashing', () => {
		const readDocsCard = shallow(<ReadDocsCard />);
		expect(readDocsCard.exists()).toBe(true);
	});

	it('PatientBio renders without crashing', () => {
		expect(shallow(<PatientBio />).exists()).toBe(true);
	});
});

describe("Test rendering for all UI grids", () => {
	it('DiagnosisGrid renders without crashing', () => {
		expect(shallow(<DiagnosisGrid />).exists()).toBe(true);

	});

	it('HomePageGrid renders without crashing', () => {
		expect(shallow(<HomePageGrid />).exists()).toBe(true);
	});

	it('PatientExplorationGrid renders without crashing', () => {
		expect(shallow(<PatientExplorationGrid />).exists()).toBe(true);
	});
});



