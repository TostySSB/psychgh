import React, { Component } from "react";
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DiagnosisCard from '../cards/DiagnosisCard';
import GitHubCard from '../cards/GitHub';
import ReadDocsCard from '../cards/readDocs';
import DiagnosisGrid from '../grids/DiagnosisGrid';
import HomePageGrid from '../grids/HomePageGrid';
import PatientExplorationGrid from '../grids/PatientExplorationGrid';

configure({adapter: new Adapter()});

describe("Test rendering for all UI Cards", () => {
	it('DiagnosisCard renders without crashing', () => {
		shallow(<DiagnosisCard />);
	});

	it('GitHubCard renders without crashing', () => {
		shallow(<GitHubCard />);
	});

	it('ReadDocsCard renders without crashing', () => {
		shallow(<ReadDocsCard />);
	});
});

describe("Test rendering for all UI grids", () => {
	it('DiagnosisGrid renders without crashing', () => {
		shallow(<DiagnosisGrid />);
	});

	it('HomePageGrid renders without crashing', () => {
		shallow(<HomePageGrid />);
	});

	it('PatientExplorationGrid renders without crashing', () => {
		shallow(<PatientExplorationGrid />);
	});
});

