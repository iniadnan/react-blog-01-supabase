import SUPABASE from "../supabaseClient"
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";

interface Post {
    id: number,
    title: string,
    text: string,
    synopsis: string,
    slug: string,
    author: string,
    created_at: string
}

function Detail() {
    const [post, setPost] = useState<Post>(
        {
            id: 0,
            title: "",
            text: "",
            synopsis: "",
            slug: "",
            author: "",
            created_at: ""
        }
    )
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const slug = location.pathname.split("/")[2]
        getPost(slug);
    }, [location])

    async function getPost(slug: string) {
        try {
            const { data: post, error: postError } = await SUPABASE.from('posts')
                .select('id, title, text, synopsis, slug, author, created_at')
                .eq('slug', slug)
                .single()

            if (postError !== null) {
                throw postError
            }

            setPost(post)
        } catch (e) {
            console.log(e)
        }
    }

    async function editPost(id: number) {
        try {
            const { error: errorUpdate } = await SUPABASE.from('posts')
                .update(post)
                .eq('id', id)

            if (errorUpdate !== null) {
                throw errorUpdate
            }

            navigate('/');
        } catch (e) {
            console.log(e)
        }
    }

    const onHandleChange = (event: { target: { name: string; value: string; }; }) => {
        const name = event.target.name;
        const value = event.target.value;
        setPost(values => ({ ...values, [name]: value }))
    }

    return (
        <>
            <Navbar />
            <main className="py-10">
                <form id="form__modal" name="form__modal" className="py-5 w-full max-w-[800px] mx-auto">
                    <InputForm addClass="mb-5" type="text" onChangeValue={onHandleChange} name="title" id="title" title="Title" value={post.title} />
                    <InputForm addClass="mb-5" type="text" onChangeValue={onHandleChange} name="synopsis" id="synopsis" title="Synopsis" value={post.synopsis} />
                    <InputForm addClass="mb-5" type="text" onChangeValue={onHandleChange} name="slug" id="slug" title="Slug" value={post.slug} />
                    <InputForm addClass="mb-5" type="text" onChangeValue={onHandleChange} name="author" id="author" title="Author" value={post.author} />
                    <div className="mb-5">
                        <label htmlFor="text" className="text-base text-gray-700 inline-block pb-2">Text</label>
                        <textarea
                            name="text"
                            id="text"
                            className="bg-gray-100 w-full focus:outline-none py-2 px-4 rounded"
                            rows={5}
                            onChange={onHandleChange}
                            value={post.text || ""}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-end gap-x-6 pr-8">
                        <button
                            onClick={() => editPost(post.id)}
                            type="button"
                            className="text-base text-white py-1.5 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Detail