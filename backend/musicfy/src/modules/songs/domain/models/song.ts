//Un álbum cuenta solo con el nombre, nombre del artista, año del álbum (2010 – 2021) y url de la imagen.

import { IsInt, IsNotEmpty } from "class-validator";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Album } from "src/modules/albums/domain/models/album";

export interface ISong {
    id?: number
    name: string,
    album_id: number//album id
}

export class SongDTO implements ISong {
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsNotEmpty()
    album_id: number;

}

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
