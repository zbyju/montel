FROM node:lts-alpine3.16

WORKDIR /app

ENV PATH /node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json


# install node dependencies
RUN echo "npm install in progress..." && yarn install --frozen-lockfilenpm ci

EXPOSE 6000

CMD [ "yarn", "dev", "--host"]