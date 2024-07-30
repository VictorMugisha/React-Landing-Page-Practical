import bannerImg from "../images/banner.jpeg"

export default function Banner() {
    return (
        <section className="w-full relative banner-container h-screen">
            <div className="lg:px-44 bg-custom-gray w-full h-full flex flex-col gap-4 items-center justify-center text-white">
                <h1 className="uppercase text-4xl lg:text-7xl font-bold text-center">We are a <br /> Landing Page</h1>
                <p className="text-xl text-center font-light w-2/3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
                </p>
                <button
                    className="bg-blue-400 text-white border-none outline-none py-3 px-8 text-sm rounded-3xl mt-12"
                >
                    LEARN MORE
                </button>
            </div>
        </section>
    )
}
