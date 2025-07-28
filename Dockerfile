# Stage 1: Build with Node (not Bun)
FROM node:21 AS builder

WORKDIR /app

# Install Bun (because you use it in your project)
RUN npm install -g bun

# Copy and install dependencies
COPY package.json ./
RUN bun install

# Copy rest of the code
COPY . .

# Build Next.js project
RUN bun run build

# Stage 2: Run with Bun
FROM oven/bun:1.1.4

WORKDIR /app

# Copy build output and required files only
COPY --from=builder /app ./

EXPOSE 3000

CMD ["bun", "start"]
