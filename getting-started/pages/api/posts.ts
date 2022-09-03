// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from '../Post'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
    const posts : Post[] = [
        {
            id: 1,
            title: "Post bellissimo",
            slug: "post-bellissimo",
            content: "Questo post è bellissimo. Il mio primo post con nextjs"
        },
        {
            id: 2,
            title: "Next.js getting started",
            slug: "next-js-getting-started",
            content: "Questo post è bellissimo. Il mio primo post con nextjs"
        },
        {
            id: 3,
            title: "Altro post di prova",
            slug: "altro-post-di-prova",
            content: "altro post di prova. Provaimo ad utilizzare next.js"
        },
        {
            id: 4,
            title: "Post bellissimo",
            slug: "post-bellissimo",
            content: "Questo post è bellissimo. Il mio primo post con nextjs"
        },
        {
            id: 5,
            title: "Post a caso",
            slug: "post-a-caso",
            content: "Questo post è bellissimo. Il mio primo post con nextjs"
        }
    ]
  res.status(200).json(posts)
}
