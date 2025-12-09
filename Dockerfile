FROM node:24

COPY . /app

WORKDIR /app

RUN npm install

RUN chmod -R a+wx /app/node_modules/.vite

RUN chmod a+w /app


ENTRYPOINT ["npm", "run", "dev"]

EXPOSE 3000
