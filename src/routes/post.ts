import {FastifyPluginCallback, FastifyRequest} from "fastify";
import {prisma} from "../lib/db";
import {badRequestError, notFoundError} from "../util/error";
import {SavePost} from "../lib/validation";
import {ZodError} from "zod";

const routes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get("/", async (_, reply) => {
    const posts = await prisma.post.findMany();
    reply.send(posts);
  });

  fastify.get("/:id", async (req: FastifyRequest<{Params: {id: string}}>, reply) => {
    const id: string = req.params?.id;
    const post = await prisma.post.findUnique({where: {id}});

    if (!post) {
      reply.status(404).send(notFoundError("Post", "id", id));
      return reply;
    }
    reply.send(post);
  });

  fastify.put("/", async (req, reply) => {
    try {
      const post = SavePost.parse(req.body);
      const saved = await prisma.post.upsert({
        where: {
          id: post.id ?? "",
        },
        update: post,
        create: post,
      });
      reply.send(saved);
    } catch (e) {
      console.log("error: ", e);
      reply.status(400).send(badRequestError("payload is not valid"));
      return reply;
    }
  });

  done();
};

export default routes;
