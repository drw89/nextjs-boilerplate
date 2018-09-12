FROM mhart/alpine-node

WORKDIR /app
COPY . .

RUN npm config set strict-ssl false
RUN npm install
RUN npm build

EXPOSE 3000
CMD ["npm", "start"]