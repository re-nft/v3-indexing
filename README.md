# reNFT v3 Indexing - Subsquid

Squid is generated from `squidgen.yaml`. Reason we are using yaml file instead of using `squidgen` is because our source of truth
is more than one contract, see [this](https://docs.subsquid.io/basics/squid-gen/#configuration).

Once it's generated there is some manual work to be done, however. You cannot use the generated code out of the box.

## Development

To spin up a docker db:

`sqd up`

If you need to generate a new migrations script, because you have made changes to `schema.graphql`, run:

`sqd migrations:generate`

You can learn about all the commands at your disposal in `commands.json`

To connect to the database and explore the data you can use various clients, for example:

- pgAdmin (if you will just use it for PostgreSQL)
- DBeaver (if you will use it for multiple databases)
- DBVisualiser (if you will use it for multiple databases)

Here is the default data you'd need to use to connect to the db:

## Deploying to Aquarium

I had issues when both v1 and v2 were syncing at the same time. API endpoint wouldn't be available.

To remedy, I had to hibernate v1 and restart v2.

![squid db config](./assets/squid-db.png)

Password is `postgres`

---

To start sepolia indexing run:

`sqd process:eth-sepolia`

## Optimisations

Right now, the data goes into aquarium hosted db. Then, api will pull that data by making post requests to the squid graphql server.

If we are seeing slow responses, then we can save indexed data straight into the same db as the api.

This wasn't done originally because of migrations. Subsquid has its own migrations and our api does too. To avoid potential conflicts, it was decided to keep the dbs separate to begin with.

It is possible to index transactions with subsquid but they are more costly in terms of RPC calls, which is OK, if we need to do it. However, there is no point in double indexing the same data with transactions and logs at the same time.
