import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring";
import { Post } from '../Post'
import Layout from "../../components/Layout";

type Props = {
    post: Post,
    errors: string
}

const PostPage = ({ post, errors }: Props) => {
    if (errors) {
        return (
            <Layout>
                <div>
                    <h1>{errors}</h1>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
                <p>PostID: {post.id}</p>
                <p>{post.content}</p>
            </div>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts: Post[] = await fetch("http://localhost:3000/api/posts")
        .then(response => response.json());

    // Get the paths we want to pre-render based on users
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
    const posts: Post[] = await fetch("http://localhost:3000/api/posts")
        .then(response => response.json());
      const slug = params?.slug
      const post = posts.find((data) => data.slug === slug)
      if (!post) {
        throw "Post not found"
      }
      // By returning { props: item }, the StaticPropsDetail component
      // will receive `item` as a prop at build time
      return { props: { post } }
    } catch (err: any) {
      return { props: { errors: err.message } }
    }
  }

export default PostPage;