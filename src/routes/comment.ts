import {FastifyPluginCallback, FastifyRequest} from "fastify";
import {badRequestError} from "../util/error";
import {commentService} from "../services/comment.service";

const routes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.post(
    "/posts/:pid/comments",
    async (req: FastifyRequest<{Params: {pid: string}}>, reply) => {
      try {
        const postId = req.params.pid;
        return await commentService.create(req.body, postId);
      } catch (e) {
        reply.status(400).send(badRequestError("ensure provided payload is valid"));
      }
    }
  );

  fastify.get(
    "/posts/:pid/comments",
    async (req: FastifyRequest<{Params: {pid: string}}>, reply) => {
      try {
        const postId = req.params.pid;
        return await commentService.findByPostId(postId);
      } catch (e) {
        reply.status(400).send(e);
      }
    }
  );

  done();
};

export default routes;
