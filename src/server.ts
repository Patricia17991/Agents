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

app.listen({ port:3333}).then(() => {
   console.log('HTTP server Running!') //then p quando terminar de rodar notificar
}) //aqui passamos a porta que nossa aplicação vai rodar
