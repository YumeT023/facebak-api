import {FastifyPluginCallback} from "fastify";
import {prisma} from "../lib/db";
import {notFoundError} from "../util/error";

const routes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get("/", async (_, reply) => {
    const posts = await prisma.post.findMany();
    reply.send(posts);
  });

  fastify.get("/:id", async (req, reply) => {
    const id: string = req.params["id"];
    const post = await prisma.post.findUnique({where: {id}});

    if (!post) {
      reply.status(404).send(notFoundError("Post", "id", id));
      return reply;
    }
    reply.send(post);
  });

  done();
};

export default routes;
