import {buildJsonSchemas} from "fastify-zod";
import {Comment} from "../comment/schema";
import {Post} from "../post/schema";
import {User} from "../user/schema";
import {Reaction} from "../reaction/schema";

export const {schemas, $ref} = buildJsonSchemas({
  ...Comment,
  ...Post,
  ...User,
  ...Reaction,
});
