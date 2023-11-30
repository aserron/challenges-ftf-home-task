import {Injectable} from '@nestjs/common';
import {Octokit} from "@octokit/rest";
import {ConfigService} from '@nestjs/config';

@Injectable()
export class GithubService {
    private octokit: Octokit;

    constructor(private configService: ConfigService) {
        this.octokit = new Octokit({
            auth: this.configService.get('GITHUB_TOKEN'),
        });
    }

    async getUserCommitHistory(username: string, repo: string) {
        
        const response = await this.octokit.repos.listCommits({
            owner: username,
            repo: repo,
        });
        return response.data;
    }

    // Example method to get user data
    async getUserData(username: string) {
        const {data} = await this.octokit.users.getByUsername({username});
        return data;
    }

    // Add more methods as needed to interact with the GitHub API
}
