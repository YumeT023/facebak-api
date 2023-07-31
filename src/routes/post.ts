import {FastifyPluginCallback, FastifyRequest} from "fastify";
import {postService} from "../services";

const routes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get("/posts", async () => {
    return await postService.findAll();
  });

  fastify.get("/posts/:id", async (req: FastifyRequest<{Params: {id: string}}>, reply) => {
    const id: string = req.params?.id;
    try {
      return await postService.findById(id);
    } catch (e) {
      reply.status(404).send(e);
      return reply;
    }
  });

  fastify.put("/posts", async (req, reply) => {
    try {
      return await postService.save(req.body);
    } catch (e) {
      reply.send(e);
    }
  });

  done();
};

export default routes;
