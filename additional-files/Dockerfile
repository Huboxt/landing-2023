FROM node:16-alpine
ENV NODE_OPTIONS=--max-old-space-size=1024
# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY .next .next
COPY node_modules node_modules
COPY src src
# Set the command to run the application when the container starts
CMD ["npm", "start"]