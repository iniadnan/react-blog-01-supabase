import { Link } from "react-router-dom"

function Navbar(props: { navHandleModal?: () => void }) {

    const { navHandleModal } = props;

    return (
        <nav className="w-full border-b-2 py-3 bg-gray-50">
            <div className="container mx-auto px-5 flex items-center justify-between">
                <Link to='/' className="font-semibold text-xl md:text-3xl text-gray-700">Home</Link>
                <button onClick={navHandleModal} type="button" className="text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium py-2 px-5 rounded-lg">New Post</button>
            </div>
        </nav>
    )
}


export default Navbar