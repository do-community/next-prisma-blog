import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  // lets like the post
  const postId = req.body.id;
  
  const prisma = new PrismaClient();
  const post = await prisma.post.update({
    where: { id: postId },
    data: { likes: { increment: 1 } },
  });

  res.status(200).json({ post });
}
