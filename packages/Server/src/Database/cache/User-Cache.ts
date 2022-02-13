import { model, Model, Query } from 'mongoose';
import { IUser, userSchema } from '../Models/UsersPanel';

type TeditUser = 'email' | 'password';
const UserCache: Array<IUser> = [];
class User {
  db: Model<IUser>;
  cache: Array<IUser>;

  constructor() {
    this.db = this.setSchema();
    this.cache = UserCache;
  }

  setSchema() {
    return model('users', userSchema);
  }

  async fetchAllUsers() {
    const fetchAllUsers = await this.db.find();
    const CacheLength = this.cache.length;
    const CacheTime: number =
      CacheLength < 50 ? 900000 : CacheLength > 50 && CacheLength < 250 ? Number('1.8e+6') : Number('3.6e+6');

    setInterval(() => {
      this.sendCachetoDb();
    }, CacheTime);

    return fetchAllUsers.map((user) => {
      UserCache.push(user);
    });
  }

  findById(id: string) {
    const users = this.cache;
    const found = users.find((item) => item._id === id);

    if (!found) return Error('Usuário não encontrado, verifique suas credenciais.');

    return found;
  }

  findByEmail(email: string) {
    const users = this.cache;
    const found = users.find((item) => item.email === email);

    if (!found) return Error('Usuário não encontrado, verifique suas credenciais.');

    return found;
  }

  editUser(item: TeditUser, oldUser: string, newUser: string) {
    const users = this.cache;
    const found = users.find((user) => user[item] === oldUser);

    if (!found) return Error('Usuário não encontrado, verifique suas credenciais.');

    found[item] = newUser;

    return users;
  }

  deleteUser(id: string) {
    const users = this.cache;

    const found = users.find((item) => item?._id === id);

    if (!found) return Error('Usuário não encontrado, verifique suas credenciais.');

    const pos = users.indexOf(found);
    users.splice(pos, 1);

    return users;
  }

  sendCachetoDb() {
    if (this.cache.length < 1) return;

    this.cache.map(async (user) => {
      const data = await this.db.findOne({ _id: user._id });

      if (!data)
        return new this.db({
          _id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          password: user.password,
          createdAt: user.createdAt,
          panels: user.panels,
        }).save();

      return await this.db.updateOne(
        { _id: user._id },
        {
          name: user.name,
          username: user.username,
          email: user.email,
          password: user.password,
          createdAt: user.createdAt,
          panels: user.panels,
        },
        { upsert: true },
      );
    });

    return (this.cache = []);
  }
}

export const users = new User();
