import { Controller, Inject, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { IAlbumApplication } from "../../application/album.initApplication";
import { IAlbum } from "../../domain/models/album";

@Controller('album')
export class AlbumController {
    constructor(@Inject(IAlbumApplication) protected albumApplication: IAlbumApplication) {}

    @Post('create')
    async createAlbum(@Res() res: Response, @Req() req: Request) {
        const newAlbum: IAlbum = {
            name: req.body['name'],
            artist: req.body['artist'],
            year: Number(req.body['year'])
        }
        console.log(newAlbum)
        const a = await this.albumApplication.createAlbum(newAlbum)
        res.status(200).json(a)

    }






}
