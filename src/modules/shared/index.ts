import {buildJsonSchemas} from "fastify-zod";
import {Comment} from "../comment/schema";
import {Post} from "../post/schema";

export const {schemas, $ref} = buildJsonSchemas({
  ...Comment,
  ...Post,
});
