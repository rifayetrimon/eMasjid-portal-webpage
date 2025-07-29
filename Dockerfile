# Stage 1: Build with Node (not Bun)
FROM node:21 AS builder

WORKDIR /app

# Install Bun globally
RUN npm install -g bun

# Copy and install dependencies
COPY package.json bun.lock ./
RUN bun install

# Copy rest of the project files
COPY . .

# Set environment variable for basePath
ENV NEXT_PUBLIC_BASE_PATH=/masjid

# Build the Next.js app with standalone output
RUN bun run build

# Stage 2: Run with Node.js for standalone output
FROM node:21-slim AS runner

WORKDIR /app

# Only copy the built output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose the production port
EXPOSE 3000

# Run the standalone server
CMD ["node", "server.js"]
