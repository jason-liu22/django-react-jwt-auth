# JWT Authentication using Django and rest framework

## API Endpoint

https://djreactjwt-1-n3165612.deta.app/api/

## API urls available

### `/auth/register/` (POST)

- payload

```
{
  "first_name": "",
  "last_name": "",
  "username": ""
  "email": "",
  "password": ""
}
```

### `/auth/login/` (POST)

- payload

```
{
  "email": "",
  "password": ""
}
```

- response

```
{
  "acces": "access token",
  "refresh": "refresh token",
  "first_name": "",
  "last_name": "",
  "username": ""
  "email": ""
}
```

## `/token/refresh/` (POST)

- header

```
Authorization: Bearer <access_token_here>
```

- payload

```
{
  "refresh": "emailaddress",
}
```

- response

```
{
  "acces": "access token",
}
```

### `/auth/logout/` (POST)

- header

```
Authorization: Bearer <access_token_here>
```

- payload

```
{
  "username": "emailaddress",
  "password": "password"
}
```

- response

```
  {
    "acces": "access token",
    "refresh": "refresh token"
  }
```

### `/users/me/` (GET)

- header

```
Authorization: Bearer <access_token_here>
```

- response

```
{
  "username": "",
  "first_name": "",
  "last_name": ""
  "email": "
}
```

### Online Demo

https://djreactjwt-1-n3165612.deta.app
