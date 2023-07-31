import {FastifyPluginCallback, FastifyRequest} from "fastify";
import {CommentModel} from "../lib/validation";
import {prisma} from "../lib/db";
import {badRequestError, notFoundError} from "../util/error";

const routes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.post(
    "/posts/:pid/comments",
    async (req: FastifyRequest<{Params: {pid: string}}>, reply) => {
      try {
        const comment = CommentModel.parse(req.body);
        const postId = req.params.pid;
        const post = await prisma.post.findUnique({
          where: {
            id: postId,
          },
        });

        // ensure post with the provided 'pid' exists
        if (!post) {
          reply.status(404).send(notFoundError("Post", "id", postId));
          return reply;
        }

        return await prisma.comment.create({
          data: {
            ...comment,
            postId,
          },
        });
      } catch (e) {
        reply.status(400).send(badRequestError("ensure provided payload is valid"));
      }
    }
  );

  done();
};

export default routes;
