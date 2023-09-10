function Navbar() {
    return (
        <nav className="w-full border-b-2 py-3 bg-gray-50">
            <div className="container mx-auto px-5 flex items-center justify-between">
                <a href="./index.html" className="font-semibold text-xl md:text-3xl text-gray-700">Home</a>
                <button type="button" className="text-base text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium py-2 px-5 rounded-lg">New Post</button>
            </div>
        </nav>
    )
}


export default Navbar