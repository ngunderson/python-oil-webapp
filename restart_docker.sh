#!/bin/bash
imageName=falconer/oilserver:v0.0.2
containerName=server

docker build -t $imageName -f Dockerfile  .

echo Delete old container...
docker rm -f $containerName

echo Run new container...
docker run -d -p 80:80 --name $containerName $imageName
