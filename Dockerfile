### STAGE 1:BUILD ###
# สร้าง node  
FROM node:latest AS builder
# Create a Virtual directory inside the docker image
WORKDIR /app
# Copy files to virtual directory
# COPY package.json package-lock.json ./
# Run command in Virtual directory



RUN npm cache clean --force
# COPY . .  เพื่อ copy Code, package.json, package-lock.json local ไปยัง  /app (ฝั่ง docker)
# สั่งรัน  npm install เพื่อติดตั้ง  node_module
# สั่งรัน  npm run build เพื่อ build project  angular
COPY . .
RUN npm install
RUN npm run build:${config}


### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/go-template .
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 80