import mongoose from "mongoose";
import app from "./app";
import 'dotenv/config';
import {Server} from 'http'
import { envVars } from "./app/config/env";

let ap;
const port = envVars.PORT || 5000;

let server :Server;

async function main() {

try {
    await mongoose.connect(envVars.MONGO_URI as string);
    
  console.log('Database connected successfully');
    server = app.listen(port, () => {
  console.log(`Library Management app listening on port ${port}`)
}) // aikhane server kii ? app.listen kii retune kore ? Q:1
} catch (error) {
    console.log(error);
}
}

main();

process.on("unhandledRejection",(error)=>{
    console.log('unhandled Rejection detected... server shuting down...',error);
    if(server){
        server.close(()=>{
            process.exit(1)
        })// aii anso tuku kii kvabe kaj kore ?Q:2 // process.exit(1) kii kore bujinai // server.close ar process.exit er moddhe parthokko kii ?node js process ar node js server er moddhe parthokko kii ? ke age bondho hoi ?Q:3 // server.close(process.exit(1)); shora shori aivabe call korle kii problem hoto
    }
    process.exit(1) // aitar mane server calu nah thakle process.exit koro tai to ? but amar question holo server calu nah thaka abosthai o process cole amn sinarion kokhon ghote ?Q:4
})



// promise.reject(new Error("I forgot to catch this promise"))




process.on("uncaughtException",(error)=>{
    console.log('uncaught Exception detected... server shuting down...',error);
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
    process.exit(1) 
})

// throw new Error("I gorgot to handle this local error")

process.on("SIGTERM",()=>{
    console.log('SIGTERM SIGTERM RECIVEED... server shuting down...');
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
    process.exit(1) 
})

process.on("SIGINT",()=>{
    console.log('SIGTERM SIGTERM RECIVEED... server shuting down...');
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
    process.exit(1) 
})