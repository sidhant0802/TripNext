FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# expose port for Render
ENV PORT=8080
EXPOSE 8080

CMD ["node", "app.js"]
