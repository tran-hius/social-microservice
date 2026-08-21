import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";
import { correlationIdMiddleware } from "./middlewares/correlation-id.middleware.js";
import { optionalAuthMiddleware } from "./middlewares/auth.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const AUTH_SERVICE_URL =
  process.env.AUTH_SERVICE_URL || "http://localhost:8001";

const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL || "http://localhost:8002";

const POST_SERVICE_URL =
  process.env.POST_SERVICE_URL || "http://localhost:8003";

app.use(cors());
app.use(helmet());

app.use(correlationIdMiddleware);
app.use(optionalAuthMiddleware);

app.use((req, res, next) => {
  const correlationId = req.headers["x-correlation-id"];
  console.log(
    `[Gateway] ${req.method} ${req.originalUrl} | Correlation-ID: ${correlationId}`,
  );
  next();
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "api-gateway",
    timestamp: new Date().toISOString(),
    routes: {
      authService: AUTH_SERVICE_URL,
      userService: USER_SERVICE_URL,
      postService: POST_SERVICE_URL,
    },
  });
});

app.use(
  "/api/auth",
  createProxyMiddleware({
    target: AUTH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/api/auth": "/auth",
    },
  }),
);

app.use(
  "/api/users",
  createProxyMiddleware({
    target: USER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/api/users": "/users",
    },
  }),
);

app.use(
  "/api/posts",
  createProxyMiddleware({
    target: POST_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      "^/api/posts": "/posts",
    },
  }),
);

app.listen(PORT, () => {
  console.log(`[API-GATEWAY] is running on http://localhost:${PORT}`);
  console.log(`[AUTH-SERVICE] target ${AUTH_SERVICE_URL}`);
  console.log(`[USER-SERVICE] target ${USER_SERVICE_URL}`);
  console.log(`[POST-SERVICE] target ${POST_SERVICE_URL}`);
});
