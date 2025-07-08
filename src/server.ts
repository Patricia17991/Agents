import { fastify } from "fastify"
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provide-zod"

import { fastifyCors } from "@fastify/cors"


const app = fastify()
