FROM node

WORKDIR C:/Users/Ákos/Desktop/beerhouse/backend
COPY package*.json ./
COPY . .
RUN npm install -s

EXPOSE 8000
CMD ["npm", "start"]
