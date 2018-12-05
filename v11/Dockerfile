FROM node:11
WORKDIR /app
COPY . /app

# install git
RUN apt-get update \
    && apt-get install -y git


# globally installed ganache-cli with npm
RUN npm install -g ganache-cli@beta
RUN cd /app \
    && npm init -y \
    && npm install ganache-cli@beta

CMD ganache-cli
EXPOSE 8545
