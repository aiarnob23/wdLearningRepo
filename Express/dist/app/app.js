"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
//Router
const userRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
userRouter.post('/createUser', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User created successfully",
        data: user
    });
});
const courseRouter = express_1.default.Router();
app.use('/api/v1/courses', courseRouter);
courseRouter.post('/createCourse', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User created successfully",
        data: course
    });
});
//middlewares
const logger = (req, res, next) => {
    console.log(req.url, ' ', req.hostname);
    next();
};
//functions for CRUD
app.get('/', (req, res) => {
    res.send('Express!!!');
});
app.post('/post', (req, res) => {
    console.log(req.body);
    res.send('got data... ...');
});
app.get('/:id/:number', (req, res) => {
    let id = req.params.id;
    let number = req.params.number;
    res.send({ id, number });
});
app.get('/query', logger, (req, res, next) => {
    try {
        res.send(req.query);
    }
    catch (error) {
        next(error);
    }
});
//all error handler
app.all("*", (req, res) => {
    res.status(400);
});
//global error handling middleware
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "something went wrong"
        });
    }
});
exports.default = app;
