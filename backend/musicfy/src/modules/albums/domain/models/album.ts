//Un álbum cuenta solo con el nombre, nombre del artista, año del álbum (2010 – 2021) y url de la imagen.

import { IsNotEmpty, IsInt, Max, Min, IsUrl } from "class-validator";
import { Column, DataType, Model, Table } from "sequelize-typescript";


export interface IAlbum {
    id?: number
    name: string,
    artist: string,
    year: number,
    url: string
}

export class AlbumDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    artist: string;

    @IsInt()
    @Min(2010)
    @Max(2021)
    year: number;

    @IsUrl()
    url: string

}

export const AlbumORM = "AlbumORM";

@Table
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
    artist: string;

    @Column({
        type: DataType.INTEGER,
    })
    year: number;

    @Column({
        type: DataType.STRING,
    })
    url: string;
}

