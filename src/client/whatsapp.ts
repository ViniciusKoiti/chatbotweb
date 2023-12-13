import { Client } from 'whatsapp-web.js';

const client = new Client({
    puppeteer: {
		args: ['--no-sandbox'],
	}
});

client.on('qr', (qr: string) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

export default client;