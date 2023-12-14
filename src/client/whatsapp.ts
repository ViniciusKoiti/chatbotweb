import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const client = new Client({
    puppeteer: {
		args: ['--no-sandbox'],
	}
});

client.on('message', message => {
	console.log(message.body);
});
 

client.on('qr', (qr: string) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

export default client;