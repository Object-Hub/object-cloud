import { IUser, userSchema } from '../Models/UsersPanel';
import { connect, Model, model } from 'mongoose';
import { config } from 'dotenv';

config();

class Mongoose {
  readonly users: Model<IUser>;

  constructor() {
    this.users = this.setUserSchema();
  }

  Connect() {
    connect(`${process.env.MONGO_CONNECT}`)
      .then(async (db) => {
        console.log('DataBase Conectada com sucesso: ' + db.connection.name);
        await this.setUserSchema();
      })
      .catch((e) => {
        const { message } = e as Error;
        console.error(`Ocorreu um erro ao conecta-se a DataBase:\n${message}`);
        return process.exit(1);
      });
  }

  private setUserSchema() {
    return model('users', userSchema);
  }
}

export const DataBase = new Mongoose();
