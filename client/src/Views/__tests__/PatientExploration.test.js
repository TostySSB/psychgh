import React, { Component } from "react";
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import axios from "axios"
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe("GET / patients", () => {
	test("It returns a list of patients", () => {
		axios.get('/api/users/userList').then(response => {
			expect(response.data.length).toBe('10');
		})
	});
});