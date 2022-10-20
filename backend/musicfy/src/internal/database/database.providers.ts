import { Sequelize } from "sequelize-typescript";
import { Album } from "src/modules/albums/domain/models/album";
import { Song } from "src/modules/songs/domain/models/song";

export const IDatabase = Symbol("IFechasRepo");
export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'musicfy',
            });
            sequelize.addModels([Album, Song]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
