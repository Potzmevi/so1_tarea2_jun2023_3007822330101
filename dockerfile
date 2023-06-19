# Imagen base
FROM node:14

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package.json package-lock.json /app/
COPY app.js /app/
COPY index.html /app/

# Instalar dependencias
RUN npm install

# Puerto en el que se ejecutará el servidor
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["node", "app.js"]
