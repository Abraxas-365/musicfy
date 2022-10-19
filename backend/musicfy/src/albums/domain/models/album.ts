//Un álbum cuenta solo con el nombre, nombre del artista, año del álbum (2010 – 2021) y url de la imagen.

import { number, object, string } from "yup";

export interface IAlbum {
    name: string,
    artist: string,
    year: number,
}

export const Album = object({
    name: string().required("Name is required"),
    artist: string().required("Artist is required"),
    year: number().required("Year is required").min(2010).max(2021)
})
