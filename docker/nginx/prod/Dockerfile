FROM nginx:1.19.3-alpine

RUN apk add --update openssl && \
    rm -rf /var/cache/apk/*

RUN mkdir -p /etc/nginx/certificates

RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/certificates/key.pem -out /etc/nginx/certificates/cert.pem -subj "/C=AT/ST=Vienna/L=Vienna/O=Security/OU=Development/CN=example.com"

ADD prod/default.conf /etc/nginx/conf.d/default.conf

ADD prod/ssl/fullchain.pem /etc/nginx/certificates
ADD prod/ssl/privkey.pem /etc/nginx/certificates
ADD prod/ssl/options-ssl-nginx.conf /etc/nginx/certificates
ADD prod/ssl/ssl-dhparams.pem /etc/nginx/certificates

WORKDIR /var/www