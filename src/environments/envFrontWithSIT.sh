#!/bin/bash
#prepare  data
release=`cat /var/lib/jenkins/workspace/go-front-sit/package.json |grep "version" |cut -d'"' -f 4`

backendUrl='http://localhost:8085/'
sapUrl='http://192.168.20.17:8880/apigoplus/EnqPartlist/'
sapApiToken='z@hz3sNY#0ohB9SspeE9@fLDQ%r65x$k8LxL28VH72FfvRWgCn'
stage='SIT' 
timestamp=$(date)
release=$release

#replace data
sed -i -e "s#%release%#$release#g" environment.prod.ts
sed -i -e "s|%backendUrl%|${backendUrl}|g" environment.prod.ts
sed -i -e "s|%sapUrl%|${sapUrl}|g" environment.prod.ts
sed -i -e "s|%sapApiToken%|${sapApiToken}|g" environment.prod.ts
sed -i -e "s|%stage%|${stage}|g" environment.prod.ts
sed -i -e "s|%timestamp%|${timestamp}|g" environment.prod.ts
sed -i -e "s|%release%|${release}|g" environment.prod.ts