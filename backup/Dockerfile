FROM alpine:latest

RUN apk add --no-cache postgresql-client aws-cli bash cronie

COPY backup.sh /usr/local/bin/backup.sh
RUN chmod +x /usr/local/bin/backup.sh

COPY crontab /etc/crontabs/root

CMD ["sh", "-c", "env > /etc/container.env && crond -f"]
