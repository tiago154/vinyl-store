FROM node:16-alpine AS builder

WORKDIR /usr/src/app

COPY ["./package.json", "./package-lock.json", "/usr/src/app/"]

COPY "./src" "/usr/src/app/src/"

FROM node:16-alpine

WORKDIR /usr/app

COPY --from=builder [\
  "/usr/src/app/package.json", \
  "/usr/src/app/package-lock.json", \
  "/usr/app/" \
  ]

COPY --from=builder "/usr/src/app" "/usr/app"

RUN npm install --only=prod

CMD npm start
