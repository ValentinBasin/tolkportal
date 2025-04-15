FROM node:latest AS build

# Define working directory
WORKDIR /app

# Copy package.json to working directory
COPY package.json package-lock.json ./

# Install dependecies
RUN npm install

# Copy code
COPY . .

# Take backend address from args
ARG VITE_STRAPI_API_URL
ENV VITE_STRAPI_API_URL=${VITE_STRAPI_API_URL}

# Build frontend
RUN npm run build

# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
