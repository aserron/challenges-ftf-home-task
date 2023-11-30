Works with [GitHub Apps](https://docs.github.com/en/developers/apps)

# [List repository activities](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repository-activities)

    GET /repos/{owner}/{repo}/activity

```bash
curl -L  
  -H "Accept: application/vnd.github+json" 
  -H "Authorization: Bearer <YOUR-TOKEN>" 
  -H "X-GitHub-Api-Version: 2022-11-28" 
  https://api.github.com/repos/OWNER/REPO/activity
```

Lists a detailed history of changes to a repository, such as pushes, merges, force pushes, and branch changes, and associates these changes with commits and users.

For more information about viewing repository activity, see "[Viewing activity and data for your repository](https://docs.github.com/repositories/viewing-activity-and-data-for-your-repository)."

## Parameters for "List repository activities"

### Headers

Name, Type, Description

`accept` string 
Setting to `application/vnd.github+json` is recommended.

---
### Path parameters
| Name    | Type,  | Description |
|---------|--------|-------------|
| `owner` | string | Required    |

The account owner of the repository. The name is not case sensitive.

| `repo` | string | Required |
|--------|--------|----------|

The name of the repository without the `.git` extension. The name is not case sensitive.

---- 

## Query parameters

| Name,       | Type,  | Description                            |
|-------------|--------|----------------------------------------|
| `direction` | string | 	The direction to sort the results by. |

-  Default		  : `desc`
- Can be one of: `asc`, `desc`

---

#### Per Page

| `per_page` | integer | The number of results per page (max 100). |
|------------|---------|-------------------------------------------|
- Default: `30`

---- 



#### Before

| `before` | string | A cursor, as given in the Link header.<br> If specified, the query only searches for results before this cursor. |
|----------|--------|------------------------------------------------------------------------------------------------------------------|

----- 
 

#### After 

| `after` | string |
|---------|--------|

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.

----- 


#### Ref 
| `ref` | string | The Git reference for the activities you want to list. |
|-------|--------|--------------------------------------------------------|

The `ref` for a branch can be formatted either as `refs/heads/BRANCH_NAME` or `BRANCH_NAME`, where `BRANCH_NAME` is the name of your branch.

---


#### Actor 

| `actor` | string | The GitHub username to use to filter by the actor who performed the activity.   |
|:--------|--------|:--------------------------------------------------------------------------------|



---

#### Time Period 

| `time_period` | string | The time period to filter by. |
|---------------|--------|-------------------------------|

For example, `day` will filter for activity that occurred in the past 24 hours, and `week` will filter for activity that occurred in the past 7 days (168 hours).

Can be one of: `day`, `week`, `month`, `quarter`, `year`

----



#### Activity Type

| `activity_type` | string | The activity type to filter by. |
|-----------------|--------|---------------------------------|

For example, you can choose to filter by "force_push", to see all force pushes to the repository.

Can be one of: `push`, `force_push`, `branch_creation`, `branch_deletion`, `pr_merge`, `merge_queue_merge`


---


### HTTP response status codes for "List repository activities"

| Status code | Description                                          |
|-------------|------------------------------------------------------|
| `200`       | OK                                                   |
| `422`       | Validation failed, or the endpoint has been spammed. | 
| ----------- | -------------                                        |


#### Code 200: Example
```json
[
  {
    "id": 1296269,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
    "before": "6dcb09b5b57875f334f61aebed695e2e4193db5e",
    "after": "827efc6d56897b048c772eb4087f854f46256132",
    "ref": "refs/heads/main",
    "pushed_at": "2011-01-26T19:06:43Z",
    "push_type": "normal",
    "pusher": {
      "login": "octocat",
      "id": 1,
      "node_id": "MDQ6VXNlcjE=",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    }
  }
]
```

#### Code 200 Schema
```json
{
  "type": "array",
  "items": {
    "title": "Activity",
    "description": "Activity",
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "examples": [
          1296269
        ]
      },
      "node_id": {
        "type": "string",
        "examples": [
          "MDEwOlJlcG9zaXRvcnkxMjk2MjY5"
        ]
      },
      "before": {
        "type": "string",
        "description": "The SHA of the commit before the activity.",
        "examples": [
          "6dcb09b5b57875f334f61aebed695e2e4193db5e"
        ]
      },
      "after": {
        "type": "string",
        "description": "The SHA of the commit after the activity.",
        "examples": [
          "827efc6d56897b048c772eb4087f854f46256132"
        ]
      },
      "ref": {
        "type": "string",
        "description": "The full Git reference, formatted as `refs/heads/<branch name>`.",
        "examples": [
          "refs/heads/main"
        ]
      },
      "timestamp": {
        "type": "string",
        "format": "date-time",
        "description": "The time when the activity occurred.",
        "examples": [
          "2011-01-26T19:06:43Z"
        ]
      },
      "activity_type": {
        "type": "string",
        "enum": [
          "push",
          "force_push",
          "branch_deletion",
          "branch_creation",
          "pr_merge",
          "merge_queue_merge"
        ],
        "description": "The type of the activity that was performed.",
        "examples": [
          "force_push"
        ]
      },
      "actor": {
        "anyOf": [
          {
            "type": "null"
          },
          {
            "title": "Simple User",
            "description": "A GitHub user.",
            "type": "object",
            "properties": {
              "name": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "email": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "login": {
                "type": "string",
                "examples": [
                  "octocat"
                ]
              },
              "id": {
                "type": "integer",
                "examples": [
                  1
                ]
              },
              "node_id": {
                "type": "string",
                "examples": [
                  "MDQ6VXNlcjE="
                ]
              },
              "avatar_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://github.com/images/error/octocat_happy.gif"
                ]
              },
              "gravatar_id": {
                "type": [
                  "string",
                  "null"
                ],
                "examples": [
                  "41d064eb2195891e12d0413f63227ea7"
                ]
              },
              "url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat"
                ]
              },
              "html_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://github.com/octocat"
                ]
              },
              "followers_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/followers"
                ]
              },
              "following_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/following{/other_user}"
                ]
              },
              "gists_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/gists{/gist_id}"
                ]
              },
              "starred_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/starred{/owner}{/repo}"
                ]
              },
              "subscriptions_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/subscriptions"
                ]
              },
              "organizations_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/orgs"
                ]
              },
              "repos_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/repos"
                ]
              },
              "events_url": {
                "type": "string",
                "examples": [
                  "https://api.github.com/users/octocat/events{/privacy}"
                ]
              },
              "received_events_url": {
                "type": "string",
                "format": "uri",
                "examples": [
                  "https://api.github.com/users/octocat/received_events"
                ]
              },
              "type": {
                "type": "string",
                "examples": [
                  "User"
                ]
              },
              "site_admin": {
                "type": "boolean"
              },
              "starred_at": {
                "type": "string",
                "examples": [
                  "\"2020-07-09T00:17:55Z\""
                ]
              }
            },
            "required": [
              "avatar_url",
              "events_url",
              "followers_url",
              "following_url",
              "gists_url",
              "gravatar_id",
              "html_url",
              "id",
              "node_id",
              "login",
              "organizations_url",
              "received_events_url",
              "repos_url",
              "site_admin",
              "starred_url",
              "subscriptions_url",
              "type",
              "url"
            ]
          }
        ]
      }
    },
    "required": [
      "id",
      "node_id",
      "before",
      "after",
      "ref",
      "timestamp",
      "activity_type",
      "actor"
    ]
  }
}
```
