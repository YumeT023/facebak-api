import {prisma} from "../../lib/db";
import {notFoundError} from "../../util/error";
import {omit} from "../../util/object-util";
import {getUserById} from "../user/service";
import {CreatePostDto} from "./schema";

// TODO: use dedicated `mapper` to map from internal object to rest object
export const getAll = () => {
  return prisma.post.findMany();
};

export const savePost = async (data: CreatePostDto) => {
  const user = await getUserById(data.userId);

  if (!user) {
    throw notFoundError("User", "id", data.userId);
  }

  if (data.id) {
    const record = await getPostById(data.id);
    if (!record) {
      throw notFoundError("Post", "id", data.id);
    }
  }

  const post = await prisma.post.upsert({
    where: {
      id: data.id ?? "",
    },
    include: {
      comments: true,
      user: true,
    },
    update: data,
    create: data,
  });

  (post as Record<string, unknown>).user = omit(post.user, ["password"]);
  return post;
};

export const getPostById = async (id: string) => {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      comments: true,
      reactions: true,
      user: true,
    },
  });

  if (!post) {
    throw notFoundError("Post", "id", id);
  }

  (post as Record<string, unknown>).user = omit(post.user, ["password"]);
  return post;
};
