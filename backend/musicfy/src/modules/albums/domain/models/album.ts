//Un álbum cuenta solo con el nombre, nombre del artista, año del álbum (2010 – 2021) y url de la imagen.

import { Column, DataType, Model } from "sequelize-typescript";
import { number, object, string } from "yup";

export interface IAlbum {
    id?: number
    name: string,
    artist: string,
    year: number,
}

export const AlbumDTO = object({
    name: string().required("Name is required"),
    artist: string().required("Artist is required"),
    year: number().required("Year is required").min(2010).max(2021)
})

export class Album extends Model<Album>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @Column({
        type: DataType.STRING,
    })
    artista: string;

    @Column({
        type: DataType.INTEGER,
    })
    year: string;

}

