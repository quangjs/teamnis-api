FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install build dependencies
RUN apk --no-cache add --virtual builds-deps build-base python3 make g++

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies and rebuild bcrypt from source
# RUN npm install --build-from-source=bcrypt
RUN npm rebuild bcrypt --build-from-source

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "run", "start:dev"]