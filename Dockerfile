FROM golang:1.23 AS builder

COPY . /src
WORKDIR /src

RUN GOPROXY=https://goproxy.cn \
    GOOS=linux GOARCH=amd64 go build -o bin/server

FROM debian:stable-slim

#RUN apt-get update && apt-get install -y --no-install-recommends \
#		ca-certificates  \
#        netbase \
#        && rm -rf /var/lib/apt/lists/ \
#        && apt-get autoremove -y && apt-get autoclean -y

COPY --from=builder /src/bin /app
COPY --from=builder /src/book /app/book

WORKDIR /app

EXPOSE 8888
VOLUME /data/conf

CMD ["./server", "-conf", "/data/conf"]
