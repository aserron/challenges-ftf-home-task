import {Controller, Get, Param, Res, HttpStatus, Query} from '@nestjs/common';
import {GithubService} from './github.service';
import {Response} from 'express';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('GitHub')
@Controller('github')
export class GithubController {

    constructor(private githubService: GithubService) {
    }

    @Get('/')
    async getGitHub(@Res() res: Response) {
        // const commits = await this.githubService.getUserCommitHistory(username, repo);
        const commits = 'GH Controller OK Reponse.';
        return res.status(HttpStatus.OK).json(commits);
    }

    @Get('users/:username')
    async getUserData(@Param('username') username: string, @Res() res: Response) {

        const userData = await this.githubService.getUserData(username);

        res.status(HttpStatus.OK).json(userData);

    }


    @Get('commits')
    async getCommits(@Query('username') username: string, @Query('repo') repo: string, @Res() res: Response) {
        try {
            const commits = await this.githubService.getUserCommitHistory(username, repo);
            res.status(HttpStatus.OK).json(commits);
        } catch (error) {
            // Global error filter will handle this
            throw error;
        }
    }


}
