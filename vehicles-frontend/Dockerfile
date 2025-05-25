# Fase 1 - build do Angular
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Fase 2 - NGINX serve os arquivos
FROM nginx:alpine
COPY --from=build /app/dist/vehicles-frontend/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
