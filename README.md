# Basic Music System

Basic music app that contain songs, collections and accounts/users

Relations:

Songs N:M Collections

Users O:M Collections

## Relevant APIs

### GET /accounts/activeAccounts

Get all active accounts

### GET /accounts/:accountId/collections

Get all collections for account`s id

### GET /accounts/:accountId/songs

Get all songs for account`s id

### GET /collections/empty

Get all empty collections

### GET /collections/:collectionId/songs

Get all songs for collection`s id

### GET /songs

Get all songs with relevant collection title(s)

### GET /songs/:songId/collections

Get all collections for song`s id

## Notes

[Makefile](./Makefile)\
[Environment Variables File](./.env)\
[Test example](./api/Accounts/__tests__.js/services.test.js) Other endpoints would have similar tests
