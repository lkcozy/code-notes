---
title: RESTful API
emoji: 📝
tags:
  - note
  - web
  - API
link: https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
created: 2022-02-16T14:37:13.000Z
modified: 2022-02-16T14:37:13.000Z
---

- An API is a user interface for a developer - so put some effort into making it pleasant
- Use RESTful URLs and actions
- Use SSL everywhere, no exceptions
- An API is only as good as its documentation - so have great documentation
- Version via the URL, not via headers
- Use query parameters for advanced filtering, sorting & searching
- Provide a way to limit which fields are returned from the API
- Return something useful from POST, PATCH & PUT requests
- HATEOAS isn't practical just yet
- Use JSON where possible, XML only if you have to
- You should use camelCase with JSON, but snake_case is 20% easier to read
- Pretty print by default & ensure gzip is supported
- Don't use response envelopes by default
- Consider using JSON for POST, PUT and PATCH request bodies
- Paginate using Link headers
- Provide a way to autoload related resource representations
- Provide a way to override the HTTP method
- Provide useful response headers for rate limiting
- Use token based authentication, transported over OAuth2 where delegation is - needed
- Include response headers that facilitate caching
- Define a consumable error payload
- Effectively use HTTP Status codes

## Resources

- [Express Typescript Boilerplate](https://github.com/w3tecch/express-typescript-boilerplate): A delightful way to building a Node.js RESTful API Services with beautiful code written in TypeScript.
