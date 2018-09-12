FROM mhart/alpine-node

WORKDIR /app
COPY . .

RUN npm config set strict-ssl false
RUN npm install
RUN npm run-script build

RUN echo 'we are running some # of cool things'

EXPOSE 8080
CMD ["npm", "start"]