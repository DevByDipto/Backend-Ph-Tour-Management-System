import { Router } from "express"
import { UserRoutes } from "../modules/user/user.route"

export const router = Router() //Router mane kii ?Q:6 

const moduleRoutes = [
    {
        path: "/user",
        route: UserRoutes
    },
    // {
    //     path: "/tour",
    //     route: TourRoutes
    // },
]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route) // app.use() route.use() aikhane use mane kii ?Q:7
})

