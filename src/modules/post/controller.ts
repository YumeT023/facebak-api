import {FastifyRequest} from "fastify";
import {getAll, getPostById, savePost} from "./service";
import {CreatePostDto} from "./schema";

export const getPostsHandler = async () => {
  return await getAll();
};

export const savePostHandler = async (
  req: FastifyRequest<{
    Body: CreatePostDto;
  }>
) => {
  return await savePost(req.body);
};

export const getPostByIdHandler = async (
  req: FastifyRequest<{
    Params: {
      id: string;
    };
  }>
) => {
  return await getPostById(req.params.id);
};
