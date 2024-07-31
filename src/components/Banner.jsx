import { useState } from "react"
import bannerImg from "../images/banner.jpeg"
import BannerPopup from "./BannerPopup"

export default function Banner() {
    const [welcome, setWelcome] = useState(false)
    return (
        <section className="relative w-full h-screen banner-container">

            {
                welcome &&
                <BannerPopup setWelcome={setWelcome} />
            }

            <div className="flex flex-col items-center justify-center w-full h-full gap-4 text-white lg:px-44 bg-custom-gray">
                <h1 className="text-4xl font-bold text-center uppercase lg:text-7xl">We are a <br /> Landing Page</h1>
                <p className="w-2/3 text-xl font-light text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
                </p>
                <button
                    className="px-8 py-3 mt-12 text-sm text-white bg-blue-400 border-none outline-none rounded-3xl"
                    onClick={() => setWelcome(true)}
                >
                    LEARN MORE
                </button>
            </div>
        </section>
    )
}
