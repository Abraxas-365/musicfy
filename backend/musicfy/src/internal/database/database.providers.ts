import * as dotenv from 'dotenv';
import { Sequelize } from "sequelize-typescript";
import { Album } from "src/modules/albums/domain/models/album";
import { Song } from "src/modules/songs/domain/models/song";
import { databaseConfig } from './dbConfig';



export const IDatabase = Symbol("IFechasRepo");
export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            let config: any;
            switch (process.env.NODE_ENV) {
                case 'development':
                    config = databaseConfig.development;
                    break;
                case 'test':
                    config = databaseConfig.test;
                    break;
                default:
                    config = databaseConfig.development;
            }
            const sequelize = new Sequelize(config);
            sequelize.addModels([Album, Song]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
