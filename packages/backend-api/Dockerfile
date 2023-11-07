# Use the official Node.js 16 image as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Bind the port that the app will run on
EXPOSE 3000

# Define the command to run the app
CMD [ "node", "index.js" ]
