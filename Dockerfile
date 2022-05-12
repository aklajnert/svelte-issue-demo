FROM node:16 as base

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci
COPY . .

RUN npm run build

FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=base /usr/src/app/build /usr/share/nginx/html
