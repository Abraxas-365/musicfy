import { Controller, Delete, Get, Inject, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { IAlbumApplication } from "../../application/album.initApplication";
import { IAlbum } from "../../domain/models/album";

@Controller('album')
export class AlbumController {
    constructor(@Inject(IAlbumApplication) protected albumApplication: IAlbumApplication) {}

    //create an album
    @Post('create')
    async createAlbum(@Res() res: Response, @Req() req: Request) {
        const newAlbum: IAlbum = {
            name: req.body['name'],
            artist: req.body['artist'],
            year: Number(req.body['year'])
        };
        const album = await this.albumApplication.createAlbum(newAlbum);
        res.status(200).json(album)
    }

    //list all albums
    @Get('list')
    async listAllAlbums(@Res() res: Response) {
        const albums = await this.albumApplication.listAllAlbums()
        res.status(200).json(albums)
    }


    @Delete('delete/:id')
    async deleteAlbum(@Res() res: Response, @Req() req: Request) {
        const albumId = Number(req.params['id'])

        await this.albumApplication.deleteAlbum(albumId)
        res.sendStatus(200)
    }









}
