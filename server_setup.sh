#!/bin/bash

#Create a new folder called mongo_full_dump
mkdir -p mongo_full_dump

#Install MongoDB tools
echo "Installing MongoDB tools..."
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install -y mongodb-database-tools

#Install AWS CLI
echo "Installing AWS CLI..."
sudo apt-get install -y awscli

#Install Node.js
echo "Installing Node.js 16.x..."
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "Setup completed!"
