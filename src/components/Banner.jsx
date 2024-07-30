import { useState } from "react"
import bannerImg from "../images/banner.jpeg"

export default function Banner() {
    const [welcome, setWelcome] = useState(false)
    return (
        <section className="w-full relative banner-container h-screen">

            {
                welcome &&
                <div
                    className="absolute top-60 left-[30%] right-[30%] bg-white py-10 px-7 flex flex-col items-center justify-center gap-5"
                >
                    <h2 className="font-semibold text-3xl">Welcome to the homepage</h2>
                    <button onClick={() => setWelcome(false)} className="bg-blue-400 text-white py-3 px-7 rounded-md">Cancel</button>
                </div>
            }

            <div className="lg:px-44 bg-custom-gray w-full h-full flex flex-col gap-4 items-center justify-center text-white">
                <h1 className="uppercase text-4xl lg:text-7xl font-bold text-center">We are a <br /> Landing Page</h1>
                <p className="text-xl text-center font-light w-2/3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
                </p>
                <button
                    className="bg-blue-400 text-white border-none outline-none py-3 px-8 text-sm rounded-3xl mt-12"
                    onClick={() => setWelcome(true)}
                >
                    LEARN MORE
                </button>
            </div>
        </section>
    )
}
