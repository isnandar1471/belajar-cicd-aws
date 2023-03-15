#!/bin/bash

DIR="$HOME/express-app"
cd $DIR

npm install

node index.js > app.out.log 2> app.err.log < /dev/null &
