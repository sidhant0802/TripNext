FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# important: ensure seed folder goes inside image
COPY init ./init

EXPOSE 8080

CMD ["node", "app.js"]
