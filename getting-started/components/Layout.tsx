import { ReactNode } from "react"
import Head from 'next/head'
import Link from 'next/link'

type Props = {
    children?: ReactNode
}

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Il mio titolo super bello!</title>
            </Head>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/post/post-bellissimo">Post bellissimo</Link>
                        </li>
                        <li>
                            <Link href="/post/next-js-getting-started">Next.js getting started</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </>
    )
}

export default Layout