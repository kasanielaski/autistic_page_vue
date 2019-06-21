#
# Developement build
#
FROM node:lts-alpine AS developement

WORKDIR /app
COPY package*.json ./
RUN npm set audit false
RUN yarn install
COPY . .

EXPOSE 8080
CMD ["yarn", "serve"]

#
# Production build
#
# FROM node:lts-alpine AS production

# WORKDIR /app

# COPY . /app

# ENV NODE_ENV production
# ENV BUILD_NUMBER ${DRONE_BUILD_NUMBER}

# RUN npm set audit false
# RUN npm i --prod

# EXPOSE 8080
# CMD ["yarn", "run", "build"]
