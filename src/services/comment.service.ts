import {AbstractService} from "./abstract.service";
import {PrismaClient, Comment} from "@prisma/client";
import {badRequestError} from "../util/error";
import {prisma} from "../lib/db";
import {CommentModel, CommentModelType} from "../lib/validation";
import {ZodError} from "zod";
import {postService} from "./post.service";

export class CommentService extends AbstractService<Comment, string> {
  constructor(db: PrismaClient) {
    super(db);
  }

  findAll(): Promise<Comment[]> {
    throw new Error("Method not implemented");
  }

  findById(): never {
    throw new Error("Method not implemented");
  }

  async findByPostId(postId: string) {
    await postService.findById(postId);
    return await this.db.comment.findMany({
      where: {
        postId,
      },
    });
  }

  async create(data: unknown, postId: string) {
    try {
      const comment = CommentModel.parse(data);
      const post = await postService.findById(postId);
      return await this.save({
        ...comment,
        postId: post.id,
      });
    } catch (e) {
      if (e instanceof ZodError) {
        throw badRequestError("ensure provided payload is correct");
      } else {
        throw e;
      }
    }
  }

  async save(data: CommentModelType & {postId: string}) {
    return this.db.comment.create({
      data,
    });
  }
}

export const commentService = new CommentService(prisma);
