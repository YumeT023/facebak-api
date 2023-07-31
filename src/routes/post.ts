import {FastifyPluginCallback, FastifyRequest} from "fastify";
import {prisma} from "../lib/db";
import {badRequestError, notFoundError} from "../util/error";
import {SavePost} from "../lib/validation";

const routes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get("/posts", async () => {
    return await prisma.post.findMany();
  });

  fastify.get("/posts/:id", async (req: FastifyRequest<{Params: {id: string}}>, reply) => {
    const id: string = req.params?.id;
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        comments: true,
      },
    });

    if (!post) {
      reply.status(404).send(notFoundError("Post", "id", id));
      return reply;
    }
    return post;
  });

  fastify.put("/posts", async (req, reply) => {
    try {
      const post = SavePost.parse(req.body);
      return await prisma.post.upsert({
        where: {
          id: post.id ?? "",
        },
        include: {
          comments: true,
        },
        update: post,
        create: post,
      });
    } catch (e) {
      reply.status(400).send(badRequestError("ensure provided payload is valid "));
      return reply;
    }
  });

  done();
};

export default routes;
