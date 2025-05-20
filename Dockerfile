FROM node:lts-bookworm AS build

RUN corepack enable pnpm

WORKDIR /website
COPY . .

RUN pnpm install --no-lockfile
RUN pnpm build

FROM joseluisq/static-web-server:2-alpine
COPY --from=build /website/dist /public

EXPOSE 80
