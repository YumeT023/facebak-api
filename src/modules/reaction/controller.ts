import {FastifyRequest} from "fastify";
import {getPostReactions} from "./service";

export const getPostReactionsHandler = async (
  req: FastifyRequest<{
    Params: {
      pid: string;
    };
  }>
) => {
  return await getPostReactions(req.params.pid);
};
