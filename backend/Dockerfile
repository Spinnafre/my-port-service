FROM node:18-alpine

RUN mkdir -p /usr/src/app/myPortService

COPY ["./package-lock.json","./package.json","/usr/src/app/myPortService/"]
COPY ["./src","./tsconfig.json","/usr/src/app/myPortService/"]

WORKDIR /usr/src/app/myPortService

RUN npm i
RUN npm run build

EXPOSE 8080

ENTRYPOINT ["npm start"]
