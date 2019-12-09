FROM node:lts-alpine

WORKDIR /app/fe

COPY package*.json yarn.lock ./

# RUN npm set audit false
RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "build"]