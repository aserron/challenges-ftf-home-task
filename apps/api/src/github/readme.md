## Usage
```typescript

    import { GithubService } from './github/github.service';

    // In your controller or service constructor
    constructor(private githubService: GithubService) {}
    
    // Use the service methods
    const userData = await this.githubService.getUserData('username');

```
