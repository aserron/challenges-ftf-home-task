## Resources
https://towardsdatascience.com/visualizing-developer-activity-via-the-github-api-48c38c40914f

# API AUTH
    curl --request GET \
    --url "https://api.github.com/octocat" \
    --header "Authorization: Bearer YOUR-TOKEN" \
    --header "X-GitHub-Api-Version: 2022-11-28"

Notice: auth headers.

> Authorization: Bearer {YOUR-TOKEN}

> Authorization: Token {JWT-PUBLIC}


> Note:  
> In most cases,  
> you can use **Authorization: Bearer** or **Authorization: token** to pass a token.  
> However, if you are passing a **JSON web token (JWT)**,  
> you must use **Authorization: Bearer.**


# Rate Limiting

## Failed login limit

-  Authenticating with invalid credentials will return **401 Unauthorized**:
 
   ```shell

   curl -I https://api.github.com --header "Authorization: Bearer INVALID-TOKEN" 

   > HTTP/2 401     
   
   > { 
   >   "message": "Bad credentials",
   >   "documentation_url": "https://docs.github.com/rest"
   > } 
   
   ```


-  After detecting several requests with invalid credentials within a short period, the API will temporarily reject all authentication attempts for that user (including ones with valid credentials) with **403 Forbidden**:
    ```shell
    
    > HTTP/2 403
    > {
    >   "message": "Maximum number of login attempts exceeded. Please try again later.",
    >   "documentation_url": "https://docs.github.com/rest"
    > }
    
    ```


Paramete
