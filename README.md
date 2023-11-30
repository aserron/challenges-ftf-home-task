# TFT Code Challenge

## Objective
Create a n-tier solution allowing users to access the challenge repository history.
1. NestJS Backend Web Service: GitHub API consumer, history endopoint provider.least should have a Nest.js backend, and a React/Tailwind frontend.
2. React FrontEnd Web App: Display repo history information.
3. Stand Alone Execution: Auto Install, unattended setup. Solution must be presented free of any user set-up, environmental vars, global executables.
4. Documented Solution: Provide clear documentation on 
   - installation. 
   - execution. 
   - API usage. 
   - UI usage.


### Backend Task Summary
#### Required:
* [x]  Create a NestJS REST Backend
* [x]  Create a GitHub API Consumer Module
* [x]  Create a API controller
* [x]  Implement the repository history info endpoint
* [ ]  Implement Rate Limiting
* [x]  Deployment should be full automatic.

#### Optional:
* [x]  Database / Persistence Layer.
* [x]  Implement Per Layer Error Handling
* [ ]  Fault Tolerant, crash recovery.
* [ ]  Advanced Logging.
* [ ]  Enforce GitHub API Usage Policies
* [ ]  Secure with JWT / API Key

### Frontend Task Summary
#### Required:
* [x]  Deployment should be full automatic.
* [ ]  Create a React Application
* [ ]  Implement UI with a tailwind, and other ui framework.
* [ ]  Implement consumer for backend service.

#### Optional:
* [ ]  Enhance with UI Library / Toolkit compatible with Tailwind
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
