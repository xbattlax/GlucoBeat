FROM node:18.1.0-alpine

EXPOSE 8000
#
WORKDIR /app

#
COPY ./package.json /app/package.json

RUN npm i -f
RUN npm install react-scripts@3.4.1 -g --silent
#
COPY . /app

EXPOSE 80
#
CMD ["npm", "start"]