import express, { Request, Response } from "express";


const app = express()


  


app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

// app.use((req: Request, res: Response) => {
//   res.status(404).json({
//     message: "Route not found",
//     success: false,
//     path: req.originalUrl,
//   });
// });

export default app;