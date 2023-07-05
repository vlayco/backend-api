import crypto from 'crypto';

const SECRET = 'STRONG-SECRET';

// Randomizer method that simply 128 random byte in base64 so it is digestiable for our database.
export const random = () => crypto.randomBytes(128).toString('base64');

// Authentication util.
export const authentication = (salt: string, password: string) => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};
