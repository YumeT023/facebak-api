import {FastifyRequest} from "fastify";
import {getPostReactions, saveReaction} from "./service";
import {ReactionInputDto} from "./schema";

export const getPostReactionsHandler = async (
  req: FastifyRequest<{
    Params: {
      pid: string;
    };
  }>
) => {
  return await getPostReactions(req.params.pid);
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
