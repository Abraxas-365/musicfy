import { AlbumService } from "./album.initService";



//retornar true si hay menos de 20 albumes
export async function canAlbumBeCreated(this: AlbumService): Promise<boolean> {
    const numberOfAlbumes = await this.albumRepo.getNumberOfAlbums()

    if (numberOfAlbumes >= 20) {
        return false
    }

    return true

}
