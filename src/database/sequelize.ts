import { Sequelize } from 'sequelize';
//importar .env

const {
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_HOST
} = process.env;

if (!POSTGRES_DB || !POSTGRES_USER || !POSTGRES_PASSWORD || !POSTGRES_HOST) {
    throw new Error("Variáveis de ambiente do banco de dados não estão definidas corretamente.");
}

const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
    host: POSTGRES_HOST,
    dialect: 'postgres'
});

conectar();

async function conectar(): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida!');
    } catch (error) {
        console.error('Conexão falha com o banco', error);
    }
}

export default sequelize;