import {FastifyRequest} from "fastify";
import {CreateCommentDto} from "./schema";
import {createComment, getCommentsByPostId} from "./service";

export const createCommentHandler = async (
  req: FastifyRequest<{
    Body: CreateCommentDto;
    Params: {
      pid: string;
    };
  }>
) => {
  const postId = req.params.pid;
  return await createComment({
    ...req.body,
    postId,
  });
};

export const getCommentByPostIdHandler = async (
  req: FastifyRequest<{
    Params: {
      pid: string;
    };
  }>
) => {
  const postId = req.params.pid;
  return await getCommentsByPostId(postId);
};
