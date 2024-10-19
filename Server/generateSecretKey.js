import { randomBytes } from 'crypto';
import fs from 'fs';
import path from 'path';

const secretKey = randomBytes(32).toString('hex'); // Generates a 256-bit (32-byte) key

// Optionally, save it to .env file
const envPath = path.join(__dirname, '.env');
fs.appendFileSync(envPath, `SECRET_KEY=${secretKey}\n`);

console.log('Secret Key:', secretKey);
