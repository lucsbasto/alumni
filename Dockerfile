FROM 623821306381.dkr.ecr.us-east-1.amazonaws.com/ubuntu-node-lts:latest

RUN mkdir -p /home/ubuntu/app

RUN npm config set cache /home/node/app/.npm-cache --global

WORKDIR /home/ubuntu/app

COPY . .

CMD ["npm", "run-script", "start:dev"]
