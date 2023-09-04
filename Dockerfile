FROM node:18.17.1-alpine

WORKDIR /usr/app
COPY ./app /usr/app
RUN npm install -y
RUN npm run build

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]