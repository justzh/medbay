import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const post = await prisma.post.create({
      data: {
        title: req.body.title,
        content: req.body.content,
      },
    });
    res.status(200).json({ "message": "successful POST!" });
  } else {
    res.status(400).json({ "message": "invalid POST request" });
  }
}
