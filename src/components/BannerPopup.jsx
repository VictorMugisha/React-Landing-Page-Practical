import ReactDom from "react-dom"

export default function BannerPopup({setWelcome}) {
    return ReactDom.createPortal(
        <div
            className="absolute top-60 left-[30%] right-[30%] bg-white py-10 px-7 flex flex-col items-center justify-center gap-5"
        >
            <h2 className="text-3xl font-semibold">Welcome to the homepage</h2>
            <button onClick={() => setWelcome(false)} className="py-3 text-white bg-blue-400 rounded-md px-7">Cancel</button>
        </div>,
        document.getElementById("banner-popup")
    )
}
