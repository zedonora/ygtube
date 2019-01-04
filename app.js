import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routers";
const app = express();

app.set("view engine", "pug"); // view 설정
app.use(cookieParser()); // cookie 정보
app.use(bodyParser.json()); // body 값
app.use(bodyParser.urlencoded({ extended: true })); // body 값
app.use(helmet()); // security부분
app.use(morgan("dev")); // log부분

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
