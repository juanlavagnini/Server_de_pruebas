import { type PrismaClient } from "@prisma/client"
import { type Express } from "express"
import duenosRoutes from "./duenos"

const addRoutes = (app: Express, prisma: PrismaClient) => {
    app.get('/', (req, res) => {
        res.send( "Hello world!")
    })

  
    // Acá van tus custom routers
    app.use('/duenos/', duenosRoutes(prisma))
}

export default addRoutes