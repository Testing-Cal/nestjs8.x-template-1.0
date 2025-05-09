FROM node:20.11.1-slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

ENV context ""
ENV port 4005

# install app dependencies
COPY package.json ./

#RUN chmod -R 775 /app
#RUN chown -R node:node /app
#USER node

RUN npm install

# add app
COPY . ./

RUN npm run build

RUN chmod -R 775 /app
RUN chown -R node:node /app
USER node
# start app
CMD ["npm","start"]
