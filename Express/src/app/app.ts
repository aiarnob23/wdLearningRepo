
import { error } from 'console';
import express, { NextFunction, request, Request, Response } from 'express';
const app = express()

//parsers
app.use(express.json());
app.use(express.text());

//Router
const userRouter = express.Router();
app.use('/api/v1/users', userRouter);

userRouter.post('/createUser', (req:Request, res:Response)=>{
    const user = req.body;
    console.log(user);

    res.json({
        success:true,
        message:"User created successfully",
        data:user
    })
})

const courseRouter = express.Router();
app.use('/api/v1/courses', courseRouter);

courseRouter.post('/createCourse', (req:Request, res:Response)=>{
    const course = req.body;
    console.log(course);

    res.json({
        success:true,
        message:"User created successfully",
        data:course
    })
})


//middlewares
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, ' ', req.hostname);
    next();
}

//functions for CRUD
app.get('/', (req: Request, res: Response) => {
    res.send('Express!!!')
})

app.post('/post', (req: Request, res: Response) => {
    console.log(req.body);
    res.send('got data... ...');
})

app.get('/:id/:number', (req: Request, res: Response) => {
    let id = req.params.id;
    let number = req.params.number;
    res.send({ id, number });

})

app.get('/query', logger, (req: Request, res: Response, next:NextFunction) => {
    try{
        res.send(req.query);
    }
    catch(error){
        next(error)
    }
})

//all error handler
app.all("*",(req:Request,res:Response)=>{
    res.status(400);
})

//global error handling middleware
app.use((error:any, req:Request, res:Response, next:NextFunction)=>{
    if(error){
        res.status(400).json({
            success:false,
            message:"something went wrong"
        });
    }
})

export default app;