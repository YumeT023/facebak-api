import {FastifyPluginCallback} from "fastify";
import {prisma} from "../lib/db";

const routes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get("/", async (_, reply) => {
    const posts = await prisma.post.findMany();
    reply.send(posts);
  });

  done();
};

export default routes;
