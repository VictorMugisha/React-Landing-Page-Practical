import ReactDom from 'react-dom'

export default function ContactPopup({setMessageBox, data}) {
    return ReactDom.createPortal(
        <section
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
            <div
                className="bg-white rounded-lg shadow-lg w-[40rem] max-w-full mx-4 p-8 border-2 border-gray-300"
            >
                <h2 className="mb-4 text-2xl font-semibold">Message Received!</h2>
                <h3 className="mb-4 text-xl">Thank you {data.name}, for sending the message!</h3>
                <p className="mb-2 text-lg font-medium">Your Message Was:</p>
                <p className="mb-4 text-lg italic">"{data.message}"</p>
                <div className="flex justify-end">
                    <button
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                        onClick={() => {
                            setMessageBox(false)
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </section>,
        document.getElementById("contact-popup")
    )
}
