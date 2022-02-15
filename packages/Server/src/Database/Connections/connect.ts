import { connect } from 'mongoose';
import { users } from '../Cache/User-Cache';
import { config } from 'dotenv';
config();

export default async function MongoConnect() {
  connect(`${process.env.MONGO_CONNECT}`)
    .then(async (db) => {
      console.log('DataBase Conectada com sucesso: ' + db.connection.name);
      await users.setSchema();
      return await users.fetchAllUsers();
    })
    .catch((e) => {
      const { message } = e as Error;
      console.error(`Ocorreu um erro ao conecta-se a DataBase:\n${message}`);
      return process.exit(1);
    });
}
