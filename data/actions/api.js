import axios from 'axios';

import { setFilms } from './state';
 
const API_URL = 'https://filmsonfreeview.herokuapp.com/api';

const getFilms = () => dispatch => {
	axios.get(`${API_URL}/films`).then(res => {
		const films = res.data;
		dispatch(setFilms(films));
	})
};

export { getFilms };

