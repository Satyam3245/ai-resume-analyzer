FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lock /prisma ./
RUN bun install --frozen-lockfile

COPY . .
COPY .env .env

RUN bunx prisma generate

EXPOSE 3000

CMD ["sh", "-c", "bunx prisma generate && bun run dev"]