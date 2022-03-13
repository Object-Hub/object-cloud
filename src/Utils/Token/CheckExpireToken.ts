import { DataBase } from '../../Database';

export default async function CheckExpireToken() {
  const { users, tokens } = DataBase;
  const user = await users.find();

  setInterval(() => {
    console.log('[SYSTEM]: Verificando Tokens...');

    user.forEach(async (info) => {
      const data = await tokens.findOne({ _id: info._id });
      const timeNow = Date.now();

      if (data && data.token && data.token !== null) {
        if (timeNow >= data.expireAt) await tokens.updateOne({ _id: info._id }, { token: null, expireAt: null });
      }
    });
  }, 300000);
}
