#!/bin/bash

set -eu

HEROKU_PORT=$PORT
PORT=3000

npm start 2>&1 &

cd heroku-nginx
curl -s https://nginx-bin.s3-eu-west-1.amazonaws.com/nginx > nginx
chmod +x nginx
sed "s|listen %PORT%|listen $HEROKU_PORT|" nginx.conf.template > nginx.conf

./nginx -g 'daemon off;' &

while true ; do
  if [[ `jobs | wc -l` != 2 ]] ; then
    echo "Node server or nginx died, exiting"
    exit 1
  fi
  sleep 5s
done
