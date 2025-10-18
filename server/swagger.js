import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Ecommerce API', version: '1.0.0' },
    servers: [{ url: '/' }]
  },
  apis: ['./routes/*.js']
};

export const swaggerSpec = swaggerJsdoc(options);
export { swaggerUi };
