#!/bin/bash
sudo docker stop glucobeat-container
sudo docker rm glucobeat-container
sudo docker rmi -f glucobeat

sudo docker build -t glucobeat .
sudo docker run --name glucobeat-container -dtp 80:80 glucobeat