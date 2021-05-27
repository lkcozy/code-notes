---
title: Amazon Cognito
emoji: 📝
tags:
  - aws
  - oauth
link:
created: 2021-05-27T10:41:56.000Z
modified: 2021-05-27T10:41:56.000Z
---

## Token

After a user logs in, an Amazon Cognito user pool returns a [JSON Web Token(JWT)](https://tools.ietf.org/html/rfc7519), which is a base64-encoded JSON string that contains information about the user (called claims). Amazon Cognito returns three tokens: the `ID token, access token, and refresh token`—the ID token contains the user fields defined in the Amazon Cognito user pool.

JWT tokens include three sections: a header, payload, and signature.

- [ID Token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken): contains claims about the authenticated user's identity, such as `name`,`email`

The following is an example of the payload, which has information about the user, as well as timestamps of the token creation and expiration.

```json
{
  "sub": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "aud": "xxxxxxxxxxxxexample",
  "email_verified": true,
  "token_use": "id",
  "auth_time": 1500009400,
  "iss": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_example",
  "cognito:username": "janedoe",
  "exp": 1500013000,
  "given_name": "Jane",
  "iat": 1500009400,
  "email": "janedoe@example.com"
}
```

- `Access Token`: credentials , which contains scopes and groups, used to access protected resources

- `Refresh Token`: contains the information necessary to obtain a new ID or access token

## [Decode and verify Amazon Cognito JWT tokens](https://github.com/awslabs/aws-support-tools/tree/master/Cognito/decode-verify-jwt)
