# Use Node.js 16.20.2 as the base image
FROM node:16.20.2

# Set the working directory inside the container
WORKDIR /app/

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code and public directory to the working directory
COPY ./src ./src
COPY ./public ./public
RUN npm install -g serve
# Build the application for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

CMD ["npx", "serve", "-s", "build"]