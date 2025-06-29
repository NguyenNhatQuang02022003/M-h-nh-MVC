  import express, { Application } from "express";
  import cors, { CorsOptions } from "cors";
  import Routes from "./routes";
  import { swaggerUi, swaggerSpec } from "./docs/swagger";
import tutorialRoutes from "./routes/tutorial.routes";

  export default class Server {
    constructor(app: Application) {
      this.config(app);
      new Routes(app);
    }

    private config(app: Application): void {
      const corsOptions: CorsOptions = {
        origin: "http://localhost:8081"
      };

      app.use(cors(corsOptions));
      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));
      app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }
  }