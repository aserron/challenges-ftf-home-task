# TFT Code Challenge


### Backend Task Summary
#### Required:
* [x]  Create a NestJS REST Backend
* [x]  Create a GitHub API Consumer Module
* [x]  Implement the repository history endpoint
* [ ]  Implement Rate Limiting
* [x]  Deployment should be full automatic.

#### Optional:
* [ ]  Secure with JWT / API Key
* [x]  Implement Per Layer Error Handling
* [ ]  Observe and implement rate limiting and other API usage policies.
* [ ]  Add Database / Persistence Layer. 

### Frontend Task Summary
#### Required:
* [ ]  Create a React Application
* [ ]  Implement UI with a tailwind, and other ui framework.
* [ ]  Implement consumer for backend service.

#### Optional:
* [ ]  Automatically Updating
* [ ]  Security: User log in, abuse protection.
* [ ]  Security: Headers, 

----
## Notes
- PG PORT = 6543
## Current External Elements

1. **Stack**  
   Begin with a project starter supporting turborepo, nestjs, react, postgresql, etc.  

2. **GitHub API**
   - Octokit Official API SDK 
   - nestjs-octokit 
     - module encapsulating api functionality for NestJS.
     - handles request moderation and abuse policies.

3. Backend 
   4. Swagger Enabled API
   5. JWT authetication
   6. Local caching
