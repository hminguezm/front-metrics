# Front Metrics with averages

# Requirement
-  [dotenv-cli](https://www.npmjs.com/package/dotenv-cli) (by local stage)
-  [Docker](https://www.docker.com/) ~>18 (Optional)
-  [Docker compose](https://docs.docker.com/compose/) ~>1.28.0 (Optional)

# Running in local stages

create a .env file configuration in de root file directory for local deploy

variables required

```dotenv
REACT_APP_API_METRICS_URL=

and run

```shell
yarn && yarn start:<>
```

# Running in local stages with dotenv

```dotenv
  dotenv -e .env yarn run start<>
```

# Running with Docker

### environments variables

The application includes several docker-compose configuration file where you can change the env vars

env_file:
- .env

Note: This basePath value must be igual to ```BASE_PATH```, into .env file

## Run with environment file

```shell
docker-compose -f docker-compose.yml up -d --build
```

## Running a new container every time and then log output (default environment):

```shell
docker-compose up -d --build --force-recreate; docker-compose logs -f
```

## Running a new container every time and then log output (with environment):

```shell
docker-compose -f docker-compose.yml up -d --build --force-recreate; docker-compose -f docker-compose.yml logs -f
```

## Reference Links

+ [docker-compose Documentation](https://docs.docker.com/compose/)

