# Use the official Node.js 16 image as a parent image
FROM node:16-alpine as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Use Nginx to serve the app
FROM nginx:alpine

# Copy the build directory from the previous step
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Define the command to run the app
CMD ["nginx", "-g", "daemon off;"]
