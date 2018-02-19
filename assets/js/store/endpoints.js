import { instance } from './api';

export const getCharityData = charityId => instance().get(`/api/charities/${charityId}`);