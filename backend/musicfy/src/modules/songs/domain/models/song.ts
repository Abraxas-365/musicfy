//Un álbum cuenta solo con el nombre, nombre del artista, año del álbum (2010 – 2021) y url de la imagen.

import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Album } from "src/modules/albums/domain/models/album";
import { object, string } from "yup";

export interface ISong {
    id?: number
    name: string,
    album_id: number//album id
}

export const SongDTO = object({
    name: string().required("Name is required"),
})

export const SongORM = "SongORM";

@Table
export class Song extends Model<Song>{
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

    @ForeignKey(() => Album)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    album_id: number;

    @BelongsTo(() => Album)
    album: Album;

}
