# FROM nginx:alpine
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY . /usr/share/nginx/html/

# build node
FROM node:25-bullseye AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "dev"]

