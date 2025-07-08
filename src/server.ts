import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { fastifyCors } from '@fastify/cors'
import { env } from './env.ts'


const app = fastify().withTypeProvider<ZodTypeProvider>()


app.register(fastifyCors, {
   origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
   return 'OK' //todo servidor back-end acaba tendo essa rota
})

app.listen({ port: env.PORT}).then(() => {
   console.log('HTTP server Running!') 
}) 
