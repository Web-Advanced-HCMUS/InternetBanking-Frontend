FROM docker.io/node:16.15-alpine as builder
WORKDIR /application
COPY package.json package.json

RUN npm install --legacy-peer-deps --silent
COPY . . 
RUN npm run build

FROM docker.io/nginx:1.21.6-alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder application/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]