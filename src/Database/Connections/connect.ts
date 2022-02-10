import { connect, Document, Model, model, Schema } from 'mongoose';
import UsersPanel from '../Models/UsersPanel';

export interface IModels {
  user: Model<Document>;
}

class MongoConnect {
  readonly db: IModels;
  readonly ConnectDbToString = process.env.MONGO_CONNECT || 'mongodb://localhost:27017/panel';

  constructor() {
    this.connectDb();
    this.db = {
      user: model('users', new Schema(UsersPanel)),
    };
  }

  private async connectDb() {
    try {
      await connect(this.ConnectDbToString);
      return console.log('DataBase Conectada com sucesso.');
    } catch (e) {
      const { message } = e as Error;
      console.error(`Ocorreu um erro ao conecta-se a DataBase:\n${message}`);
      return process.exit();
    }
  }
}

export const mongoConnect = new MongoConnect();
