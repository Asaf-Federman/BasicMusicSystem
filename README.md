# Basic Music System

Basic music app that contain songs, collections and accounts/users

Relations:

Songs N:M Collections

Users O:M Collections

## Relevant APIs

### GET /songs

Get songs with relevant collection title(s)

### GET /songs/byCollections/:id

Get songs by collection id

### GET /songs/byAccounts/:id

Get songs by account id

### GET /collections/byAccounts/:id

Get collections by account id

### GET /collections/empty

Get all empty collections

### GET /collections/bySongs/:id

get all collections by song id

### GET /accounts/activeUsers

get all active users

## Notes

[Makefile](./Makefile)\
[Environment Variables File](./.env)\
[Test example](./api/Accounts/__tests__.js/services.test.js) Other services would have similar tests
