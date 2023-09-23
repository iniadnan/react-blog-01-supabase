import InputForm from "./InputForm"

function ModalForm(props: { modalShow: boolean, closeModal: () => void }) {

    const { modalShow, closeModal } = props;

    const onHandleChange = () => {
    }

    const closeModalWithCancel = () => {
        closeModal()
    }

    return (
        <div
            className={`${modalShow ? "fixed" : "hidden"} top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 pt-0 pb-3 px-6 max-w-[95%] w-full md:w-[500px] bg-gray-50 z-10 shadow-xl`}
        >
            <div className="py-3 border-b">
                <h3 className="font-medium text-xl text-gray-500">Add New Post</h3>
            </div>
            <form id="form__modal" name="form__modal" className="py-5 max-h-[400px] overflow-y-auto">
                <InputForm addClass="mb-5" type="text" onChangeValue={onHandleChange} name="title" id="title" title="Title" />
                <InputForm addClass="mb-5" type="text" onChangeValue={onHandleChange} name="synopsis" id="synopsis" title="Synopsis" />
                <InputForm addClass="mb-5" type="text" onChangeValue={onHandleChange} name="slug" id="slug" title="Slug" />
                <InputForm addClass="mb-5" type="text" onChangeValue={onHandleChange} name="author" id="author" title="Author" />
                <div className="mb-5">
                    <label htmlFor="text" className="text-base text-gray-700 inline-block pb-2">Text</label>
                    <textarea
                        name="text"
                        id="text"
                        className="bg-gray-100 w-full focus:outline-none py-2 px-4 rounded"
                        v-model="setText"
                        placeholder="Text"
                        rows={5}
                    ></textarea>
                </div>
                <div className="flex items-center justify-end gap-x-6 pr-8">
                    <button type="button" className="text-base text-gray-700" onClick={closeModalWithCancel}>
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="text-base text-white py-1.5 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium">
                        Save
                    </button>
                </div>
            </form >
        </div >
    )
}

export default ModalForm