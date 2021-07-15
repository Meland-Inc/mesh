FROM node:14.17-alpine as builder

RUN mkdir /app
WORKDIR /app
ADD ./ /app
RUN cd /app \
    && yarn 


FROM node:14.17-alpine
RUN apk add bash --no-cache
ADD ./docker/entrypoint.sh /bin/entrypoint.sh
WORKDIR /app
# COPY --from=builder /app/node_modules /app/node_modules
# COPY --from=builder /app/dist /app/dist/
# COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/ /app/
EXPOSE 3000

ENTRYPOINT ["bash", "/bin/entrypoint.sh"]