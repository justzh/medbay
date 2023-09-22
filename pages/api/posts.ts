import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } else {
    res.status(400).json({ "message": "invalid request" })
  }
}
