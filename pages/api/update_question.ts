import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    if (req.method === "PUT") {
        res.status(200).json({ "message": "successful PUT!" });
    } else {
        res.status(400).json({ "message": "invalid PUT request" });
    }
}