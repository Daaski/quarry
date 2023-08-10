import axios from 'axios';
import process from 'process';

export const $clientAuth = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

