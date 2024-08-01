import ReactDom from "react-dom"

export default function BannerPopup({ setWelcome }) {
    return ReactDom.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div
                className="absolute w-4/5 lg:w-fit lg:top-60 lg:left-[30%] lg:right-[30%] bg-white py-10 px-7 flex flex-col items-center justify-center gap-5"
            >
                <h2 className="text-3xl font-semibold">Welcome to the homepage</h2>
                <button onClick={() => setWelcome(false)} className="py-3 text-white bg-blue-400 rounded-md px-7">Cancel</button>
            </div>
        </div>,
        document.getElementById("banner-popup")
    )
}
