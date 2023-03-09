FROM nginx:1.21.6-alpine

# Copy the Nginx configuration file
COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY public/ /usr/share/nginx/html