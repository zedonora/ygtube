// import는 알파벳순으로
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routers";
import "./passport";
const app = express();
const CokieStore = MongoStore(session);

app.use(helmet()); // security부분
app.set("view engine", "pug"); // view 설정
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser()); // cookie 정보
app.use(bodyParser.json()); // body 값
app.use(bodyParser.urlencoded({ extended: true })); // body 값
app.use(morgan("dev")); // log부분
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());

// local변수를 global 변수로 사용하도록 만들어주는 것. local 기능을 통해 변수에 접근 가능.
app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;
