import winston from 'winston';

const isProduction = process.env.NODE_ENV === 'production';

const devFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.colorize({ all: true }),
  winston.format.printf(({ timestamp, level, message, service, correlationId, stack, ...metadata }) => {
    const corrIdStr = correlationId ? ` [Corr-ID: ${correlationId}]` : '';
    const metaStr = Object.keys(metadata).length ? ` ${JSON.stringify(metadata)}` : '';
    const stackStr = stack ? `\n${stack}` : '';
    return `[${timestamp}] [${service || 'auth-service'}] ${level}${corrIdStr}: ${message}${metaStr}${stackStr}`;
  })
);

const prodFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

export const logger = winston.createLogger({
  level: isProduction ? 'info' : 'debug',
  defaultMeta: { service: 'auth-service' },
  format: isProduction ? prodFormat : devFormat,
  transports: [
    new winston.transports.Console(),
  ],
});
