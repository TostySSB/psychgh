import axios from 'axios';
import Explorations from '../explorations.js';

jest.mock('axios');

test('should get the correct exploration', () => {
	const exploration = {user_id: 1007};
	const resp = {data: exploration};
	axios.get.mockResolvedValue(resp);
});