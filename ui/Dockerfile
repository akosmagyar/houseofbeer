FROM node

WORKDIR C:/Users/Ákos/Desktop/beerhouse/ui/node_modules/.staging/@angular-devkit
COPY package*.json ./
COPY . .
RUN npm install -g @angular/cli

EXPOSE 4200
CMD ["npm", "start"]
