import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { Router } from "./router.ts/Router";
import path from "path";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

app.use(helmet());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": ["'self'", "example.com"],
        imgSrc: ["'self'", "https://s3-alpha-sig.figma.com"],
      },
    },
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

app.use("/", Router);
app.set("view engine","ejs");//set view engine
app.set("views","./src/view")//chi ra thu muc chua view
  