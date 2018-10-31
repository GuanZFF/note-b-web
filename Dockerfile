FROM node

RUN echo "----------start---------"
ADD ./ /data

WORKDIR /data
RUN npm run dev
RUN echo "----------end-----------"
