//Un álbum cuenta solo con el nombre, nombre del artista, año del álbum (2010 – 2021) y url de la imagen.

import { DataTypes } from "sequelize";
import { sequelize } from "src/albums/infrastructure/repository/postgres/album.initPostgres";
import { number, object, string } from "yup";

export interface IAlbum {
    id: number
    name: string,
    artist: string,
    year: number,
}

export const Album = object({
    name: string().required("Name is required"),
    artist: string().required("Artist is required"),
    year: number().required("Year is required").min(2010).max(2021)
})

export const AlbumORM = sequelize.define('albums', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    artist: {
        type: DataTypes.STRING,
    },
    year: {
        type: DataTypes.INTEGER,
    }


})
