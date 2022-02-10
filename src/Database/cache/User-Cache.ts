import { mongoConnect } from '../Connections/connect';

const UserMongo = mongoConnect.db.user;

class User extends UserMongo {
  constructor() {
    super();
  }
}
