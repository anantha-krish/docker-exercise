# Specify base image
FROM node:alpine
WORKDIR /usr/app

COPY ./package.json ./
# Run below command only if package.json is updated
RUN npm install

COPY ./ ./

CMD ["npm","start"]