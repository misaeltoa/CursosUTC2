# --- ETAPA 1: BUILD (Compilación) ---
# Usamos una imagen de Node para compilar la app
FROM node:22-alpine as builder

# Instalamos git porque la imagen alpine básica no lo trae
RUN apk add --no-cache git

WORKDIR /app

# CLONAR REPO: Reemplaza esta URL por la de tu equipo
RUN git clone https://github.com/misaeltoa/CursosUTC2.git .

# Instalamos dependencias y compilamos
RUN npm install
RUN npm run build

# --- ETAPA 2: PRODUCTION (Servir con Nginx) ---
# Usamos una imagen ligera de Nginx
FROM nginx:alpine

# Copiamos SOLO los archivos compilados de la etapa anterior
# OJO: Verifica si tu build genera la carpeta en /dist/nombre-proyecto o solo /dist
COPY --from=builder /app/dist/*/browser /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]