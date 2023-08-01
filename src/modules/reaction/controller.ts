import {FastifyRequest} from "fastify";
import {deleteReaction, getPostReactions, saveReaction} from "./service";
import {ReactionDeleteDto, ReactionInputDto} from "./schema";

export const getPostReactionsHandler = async (
  req: FastifyRequest<{
    Params: {
      pid: string;
    };
  }>
) => {
  return await getPostReactions(req.params.pid);
};

export const deleteReactionHandler = (
  req: FastifyRequest<{
    Body: ReactionDeleteDto;
    Params: {
      pid: string;
    };
  }>
) => {
  return deleteReaction(req.body, req.params.pid);
};

export const saveReactionHandler = (
  req: FastifyRequest<{
    Body: ReactionInputDto;
    Params: {
      pid: string;
    };
  }>
) => {
  return saveReaction(req.body, req.params.pid);
};
