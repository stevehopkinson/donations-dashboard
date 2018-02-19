import axios from 'axios';

export * from './endpoints';

export const instance = () => axios.create({
	baseURL: process.env.BASE_URL
});