import { useRouter } from "next/router";

import prisma from "../../lib/prisma";

const Question = () => {
  const router = useRouter();
  const { qid } = router.query;

  return <p>Question {qid}</p>;
};

export default Question;
