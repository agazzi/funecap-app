import axios from 'axios';

export async function fetchQRCode() {
    try {
        const response = await axios.get(`${process.env.API_ENDPOINT}/api/generate`);
        return response.data;
    } catch (error) {
        console.error('Error fetching QR code:', error);
        throw new Error('Failed to fetch QR code');
    }
}