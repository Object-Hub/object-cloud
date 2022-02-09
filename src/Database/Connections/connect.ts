import { createConnection } from 'typeorm';

createConnection().then(async () => {
  console.log('Connected to database');
});
