import { fastify } from "fastify"
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod"

import { fastifyCors } from "@fastify/cors"


const app = fastify().withTypeProvider<ZodTypeProvider>() //criando nossa aplicação


app.register(fastifyCors, {
   origin: 'http://localhost:5173', //criando nossas rotas
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
