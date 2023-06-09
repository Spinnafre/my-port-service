FROM node:18-alpine

RUN mkdir -p /usr/src/app/backend

COPY ["./package-lock.json","./package.json","/usr/src/app/backend/"]
COPY ["./src","./tsconfig.json","/usr/src/app/backend/"]

WORKDIR /usr/src/app/backend

RUN npm i
RUN npm run build

EXPOSE 8080

ENTRYPOINT ["npm","run","start:debug"]
