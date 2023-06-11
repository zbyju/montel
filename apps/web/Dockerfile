FROM node:lts-alpine3.16

WORKDIR /app

ENV PATH /node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json


RUN npm install -g pnpm
# install node dependencies
RUN echo "npm install in progress..." && pnpm install

EXPOSE 8080

CMD [ "pnpm", "dev"]
