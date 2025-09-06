import express, { Request, Response } from "express";
import cors from 'cors'
import { userRoute } from "./app/modules/user/user.route";
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandelar";
import notFound from "./app/middlewares/notFound/notFound";

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/',router)
  


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)

app.use(notFound);

export default app;