import {Post, PrismaClient} from "@prisma/client";
import {AbstractService} from "./abstract.service";
import {prisma} from "../lib/db";
import {badRequestError, notFoundError} from "../util/error";
import {PostModel} from "../lib/validation";
import {ZodError} from "zod";

class PostService extends AbstractService<Post, string> {
  constructor(db: PrismaClient) {
    super(db);
  }

  async findById(id: string) {
    const post = await this.db.post.findUnique({
      where: {
        id,
      },
      include: {
        comments: true,
      },
    });

    if (!post) {
      throw notFoundError("Post", "id", id);
    }
    return post;
  }

  findAll(): Promise<Post[]> {
    return this.db.post.findMany();
  }

  save(data: unknown) {
    try {
      const post = PostModel.parse(data);
      return this.db.post.upsert({
        where: {
          id: post.id ?? "",
        },
        include: {
          comments: true,
        },
        update: post,
        create: post,
      });
    } catch (e: unknown) {
      if (e instanceof ZodError) {
        throw badRequestError("ensure provided payload is valid");
      } else {
        throw e;
      }
    }
  }
}

export const postService = new PostService(prisma);
