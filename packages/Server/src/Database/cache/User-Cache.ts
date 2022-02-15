import { model, Model } from 'mongoose';
import { IUser, userSchema } from '../Models/UsersPanel';

let UserCache: Array<IUser> = [];
class User {
  readonly db: Model<IUser>;
  cache: Array<IUser>;

  constructor() {
    this.db = this.setSchema();
    this.cache = UserCache;
  }

  setSchema() {
    return model('users', userSchema);
  }

  fetchAllUsers() {
    setInterval(async () => {
      this.db.find().then((fetchAllUsers) => {
        UserCache = [];
        return fetchAllUsers.map((user) => UserCache.push(user));
      });
    }, 60000);
  }

  findById(id: string) {
    const users = this.cache;
    const found = users.find((user) => user._id === id);

    if (!found) throw Error('Usuário não encontrado, verifique suas credenciais.');

    return found;
  }

  findByEmail(email: string) {
    const users = this.cache;
    const found = users.find((user) => user.email === email);

    if (!found) throw Error('Usuário não encontrado com este e-mail.');

    return found;
  }
}

export const users = new User();
