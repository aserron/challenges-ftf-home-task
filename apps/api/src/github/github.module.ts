import { Module } from '@nestjs/common';
import { GithubService } from './github.service';

@Module({
  providers: [GithubService],
  exports: [GithubService] // Export if you want to use it in other modules
})
export class GithubModule {}
