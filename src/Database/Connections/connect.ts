import { createConnection } from 'typeorm';

createConnection().then(async connection => {
    console.log('Connected to database')
})