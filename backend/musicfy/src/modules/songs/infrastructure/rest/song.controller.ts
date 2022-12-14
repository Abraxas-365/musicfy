import { Body, Controller, Delete, Get, Inject, Post, Put, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { ISongApplication } from "../../application/song.initApplication";
import { ISong, SongDTO } from "../../domain/models/song";

@Controller('song')
export class SongController {
    constructor(@Inject(ISongApplication) protected songApplication: ISongApplication) {}

    //create an album
    @Post('create')
    async createSong(@Res() res: Response, @Body() newSong: SongDTO) {
        try {
            const Song = await this.songApplication.createSong(newSong);
            res.status(200).json(Song)
        } catch (err: any) {
            console.log(err)
            res.sendStatus(err.statusCode)
        }
    }

    //list all Songs by album id
    @Get('list/:albumId')
    async listAllSongsByAlbum(@Res() res: Response, @Req() req: Request) {

        const albumId = Number(req.params['albumId'])
        const Songs = await this.songApplication.listAllSongsByAlbum(albumId)
        res.status(200).json(Songs)
    }

    @Get('')
    async listAllSongs(@Res() res: Response) {

        const Songs = await this.songApplication.listAllSongs()
        res.status(200).json(Songs)
    }

    @Get(':id')
    async getSongById(@Res() res: Response, @Req() req: Request) {
        const SongId = Number(req.params['id'])
        const Songs = await this.songApplication.getSongById(SongId)
        res.status(200).json(Songs)
    }


    @Delete('delete/:id')
    async deleteSong(@Res() res: Response, @Req() req: Request) {

        const SongId = Number(req.params['id'])

        await this.songApplication.deleteSong(SongId)
        res.sendStatus(200)
    }



    @Put('update/:id')
    async updateSong(@Res() res: Response, @Req() req: Request, @Body() song: SongDTO) {

        const updateInfo: ISong = {
            id: Number(req.params['id']),
            name: song.name || "",
            album_id: song.album_id || 0,
        };

        await this.songApplication.updateSong(updateInfo)
        res.sendStatus(200)

    }









}
