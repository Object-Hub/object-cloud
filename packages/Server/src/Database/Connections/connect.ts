import { connect } from 'mongoose';
import { users } from '../Cache/User-Cache';
import { config } from 'dotenv';
config();

const ConnectDbToString = process.env.MONGO_CONNECT || 'null';

export default async function MongoConnect() {
  try {
    await connect(ConnectDbToString);
    console.log('DataBase Conectada com sucesso.');
  } catch (e) {
    const { message } = e as Error;
    console.error(`Ocorreu um erro ao conecta-se a DataBase:\n${message}`);
    return process.exit(1);
  }

  await users.setSchema();
  return await users.fetchAllUsers();
}
