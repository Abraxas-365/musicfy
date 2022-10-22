import { Body, Controller, Delete, Get, Inject, Post, Put, Req, Res, UsePipes } from "@nestjs/common";
import { Request, Response } from "express";
import { IAlbumApplication } from "../../application/album.initApplication";
import { AlbumDTO, IAlbum } from "../../domain/models/album";

@Controller('album')
export class AlbumController {
    constructor(@Inject(IAlbumApplication) protected albumApplication: IAlbumApplication) {}

    //create an album
    @Post('create')
    async createAlbum(@Res() res: Response, @Body() newAlbum: AlbumDTO): Promise<void> {
        try {
            const album = await this.albumApplication.createAlbum(newAlbum);
            res.status(200).json(album)
        } catch (err: any) {
            res.sendStatus(err.statusCode)
        }
    }

    //list all albums
    @Get('')
    async listAllAlbums(@Res() res: Response) {
        const albums = await this.albumApplication.listAllAlbums()
        res.status(200).json(albums)
    }

    @Get(':id')
    async getAlbumById(@Res() res: Response, @Req() req: Request) {
        const albumId = Number(req.params['id'])
        const albums = await this.albumApplication.getAlbumById(albumId)
        res.status(200).json(albums)
    }


    @Delete('delete/:id')
    async deleteAlbum(@Res() res: Response, @Req() req: Request) {
        const albumId = Number(req.params['id'])

        await this.albumApplication.deleteAlbum(albumId)
        res.sendStatus(200)
    }


    @Put('update/:id')
    async updateAlbum(@Res() res: Response, @Body() album: AlbumDTO, @Req() req: Request) {
        const updateInfo: IAlbum = {
            id: Number(req.params['id']),
            name: album['name'] || "",
            artist: album['artist'] || "",
            year: Number(album['year']) || 0,
            url: album['url'] || ""
        };

        await this.albumApplication.updateAlbum(updateInfo)
        res.sendStatus(200)

    }









}
