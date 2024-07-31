import { useState } from "react";
import { ImPhone } from "react-icons/im"; // Phone
import { MdLocationPin } from "react-icons/md"; // Location
import { MdMailOutline } from "react-icons/md"; // Mail

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [errorBox, setErrorBox] = useState(false)
    const [messageBox, setMessageBox] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    function handleSendMessage(event) {
        event.preventDefault()
        const { name, email, message } = formData
        if (name == "" || email == "" || message == "") {
            alert("All inputs are required")
            return
        }


    }
    return (
        <div className="flex flex-col w-full gap-10 px-10 py-20 text-white bg-blue-500 lg:px-44">
            <div className="flex flex-col gap-3">
                <h2 className="text-4xl font-bold">GET IN TOUCH</h2>
                <div className="w-16 h-1 bg-blue-300" />
            </div>

            <div className="flex flex-col items-start justify-start gap-24 lg:flex-row">
                <div className="flex flex-col w-full lg:w-2/3">
                    <p className="text-sm font-light">
                        Please fill out the form below to send us an email and we will get back to you as soon as possible.
                    </p>
                    <form
                        className="flex flex-col items-start gap-4 mt-3"
                        onSubmit={handleSendMessage}
                    >
                        <div className="flex flex-col items-center justify-between w-full gap-3 lg:flex-row inputs">
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="w-full px-2 py-1 text-black border-none outline-none"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                className="w-full px-2 py-1 text-black border-none outline-none"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full">
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="w-full h-24 px-2 py-2 text-black border-none outline-none resize-none"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            className="px-4 py-2 transition-all delay-200 border border-white rounded-3xl hover:bg-white hover:text-gray-800"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
                <div className="contacts">
                    <h3>Contact Info</h3>

                    <div>

                        <div className="flex flex-col items-start gap-2 mb-6">
                            <div className="flex items-center justify-start gap-2">
                                <MdLocationPin className="text-lg" />
                                <p className="text-lg font-semibold">Address</p>
                            </div>
                            <p className="text-sm font-light lg:w-48">
                                4321 California St, San Francisco, CA 12345
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-2 mb-6">
                            <div className="flex items-center justify-start gap-2">
                                <ImPhone className="text-lg" />
                                <p className="text-lg font-semibold">Phone</p>
                            </div>
                            <p className="text-sm font-light lg:w-48">
                                +250 799 303 355
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-2 mb-6">
                            <div className="flex items-center justify-start gap-2">
                                <MdMailOutline className="text-lg" />
                                <p className="text-lg font-semibold">Email</p>
                            </div>
                            <p className="text-sm font-light lg:w-48">
                                victormugishavm6@gmail.com
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
