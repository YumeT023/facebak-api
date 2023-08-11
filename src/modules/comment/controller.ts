import {FastifyRequest} from "fastify";
import {CreateCommentDto} from "./schema";
import {saveComment, getCommentsByPostId} from "./service";

export const saveCommentHandler = async (
  req: FastifyRequest<{
    Body: CreateCommentDto;
    Params: {
      pid: string;
    };
  }>
) => {
  const postId = req.params.pid;
  return await saveComment({
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
