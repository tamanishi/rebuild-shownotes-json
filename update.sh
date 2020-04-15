#!/bin/bash
. .env

${GENERATE_EPISODES_JSON_CMD} >| ./episodes.json
cat ./template1 >| ./index.js
cat ./episodes.json >> ./index.js
cat ./template2 >> ./index.js
wrangler publish

git add -A
git commit -m "update episodes"
git push origin master

