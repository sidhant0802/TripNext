FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy ALL project files including /init
COPY . .

EXPOSE 8080

CMD ["node", "app.js"]
