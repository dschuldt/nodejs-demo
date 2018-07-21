FROM node:8-slim
LABEL maintainer=dev@dschuldt.de

ADD https://github.com/krallin/tini/releases/download/v0.18.0/tini /tini
ADD app.js /app/app.js
RUN chmod +x /tini

ENTRYPOINT ["/tini", "--"]
CMD ["node", "/app/app.js"]
