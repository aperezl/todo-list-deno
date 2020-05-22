FROM hayd/alpine-deno:1.0.0

EXPOSE 1337

WORKDIR /app

USER deno

# COPY deps.ts .
# RUN deno cache deps.ts

ADD . .
RUN deno cache --unstable src/index.ts

CMD ["run", "--unstable", "--allow-plugin", "--allow-read",  "--allow-write", "--allow-net" , "src/index.ts"]


