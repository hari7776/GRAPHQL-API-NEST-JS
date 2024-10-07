# Use the official Node.js image from Docker Hub
FROM node:20.10.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install NestJS dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the entire local directory to the working directory
COPY . .

# Build your NestJS application
RUN yarn build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app using NestJS
CMD ["yarn", "start:prod"]
