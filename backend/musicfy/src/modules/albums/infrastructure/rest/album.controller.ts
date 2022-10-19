import { Controller, Delete, Get, Inject, Post, Put, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { url } from "inspector";
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
            year: Number(req.body['year']),
            url: req.body['url']
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


    @Put('update/:id')
    async updateAlbum(@Res() res: Response, @Req() req: Request) {
        const updateInfo: IAlbum = {
            id: Number(req.params['id']),
            name: req.body['name'] || "",
            artist: req.body['artist'] || "",
            year: Number(req.body['year']) || 0,
            url: req.body['url'] || ""
        };

        await this.albumApplication.updateAlbum(updateInfo)
        res.sendStatus(200)

    }









}
