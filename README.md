# JWT Authentication using Django and rest framework

## Demo API Endpoint

- `https://djrestauthjwt-1-e9256495.deta.app`

## API urls available

- `/auth/register/`

  ```
  register payload

  {
    "first_name": "firstname",
    "last_name": "lastname",
    "password": "password",
    "username": "emailaddress"
  }
  ```

- `/auth/login`

  ```
  login request payload
  {
    "username": "emailaddress",
    "password": "password"
  }

  login response
  {
    "acces": "access token",
    "refresh": "refresh token"
  }
  ```

- `users/1/` here, the number 1 is the id, a primary key

  ```
  request header
  Authorization: Bearer <access_token_here>

  response
  {
    "username": "email address",
    "first_name": "firstname",
    "last_name": "lastname"
  }
  ```
