# Dockerfile for React App with Nginx
FROM node:14-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build React app
RUN npm run build

# Stage 2 - Serve React build with Nginx
FROM nginx:alpine

# Copy build output from stage 1
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

