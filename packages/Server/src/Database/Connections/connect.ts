import { connect } from 'mongoose';

const ConnectDbToString = process.env.MONGO_CONNECT || 'mongodb://localhost:27017/panel';

export default async function MongoConnect() {
	try {
		await connect(ConnectDbToString);
		return console.log('DataBase Conectada com sucesso.');
	} catch (e) {
		const { message } = e as Error;
		console.error(`Ocorreu um erro ao conecta-se a DataBase:\n${message}`);
		return process.exit();
	}
}
