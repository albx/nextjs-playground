import { GetServerSideProps, NextPage } from "next";

type Hello = {
    name: string
}

const Server : NextPage = ({ data } : any) => {
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}

export const getServerSideProps : GetServerSideProps = async (context) => {
    const data : Hello = await fetch("http://localhost:3000/api/hello")
        .then(response => response.json());

    return { props: { data }};
}

export default Server;