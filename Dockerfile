FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY schedule-planner/package*.json ./

# Install dependencies
RUN npm install

# Copy the local source files to the container
COPY ./schedule-planner/ .

# Build the Vue.js project for production
RUN npm run build-only

# Expose the port that the app will run on
EXPOSE 4173

# Command to run the application
CMD ["npm", "run", "preview"]
