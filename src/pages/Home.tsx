import SUPABASE from "../supabaseClient"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import ArticleCard from "../components/ArticleCard"
import ModalForm from "../components/ModalForm"

interface Posts {
    title: string,
    text: string,
    synopsis: string,
    slug: string,
    author: string,
    created_at: string
}

function Home() {
    const [posts, setPosts] = useState<Posts[]>([])
    const [isShowModal, setIsShowModal] = useState<boolean>(false)

    useEffect(() => {
        getPosts()
    }, [])

    async function getPosts() {
        try {
            const { data: posts, error: postsError } = await SUPABASE.from('posts').select(
                'title, text, synopsis, slug, author, created_at'
            )

            if (postsError !== null) {
                throw postsError
            }

            setPosts(posts)
        } catch (e) {
            console.log(e)
        }
    }

    async function deletePost(slug: string) {
        try {
            const { error } = await SUPABASE.from('posts').delete().eq('slug', slug)

            if (error !== null) {
                throw error
            }
        } catch (e) {
            console.log(e)
        }
    }

    const appHandleModal = () => {
        setIsShowModal(!isShowModal)
    }

    return (
        <>
            <Navbar navHandleModal={appHandleModal} />
            <Header />
            <main className="w-full md:pt-10 pb-10">
                <div className="container mx-auto px-5 w-full md:w-[900px] lg:w-[1200px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {posts.map((post) => (
                            <ArticleCard handleDelete={deletePost} title={post.title} text={post.text} synopsis={post.synopsis} slug={post.slug} author={post.author} created_at={post.created_at} key={post.slug} />
                        ))}
                    </div>
                </div>
            </main >
            <ModalForm modalShow={isShowModal} />
        </>
    )
}

export default Home