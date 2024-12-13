import { ImBubbles2 } from "react-icons/im";

export default function Services() {
    return (
        <div className="w-full lg:px-44 px-10 py-20 flex flex-col items-center justify-center gap-10 bg-blue-500 text-white">
            <div className="flex items-center justify-center flex-col gap-3">
                <h2 className="font-bold text-4xl">OUR SERVICES</h2>
                <div className="w-16 h-1 bg-blue-300" />
                <p className="font-light text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
                </p>
            </div>

            <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">

                <div className="child-card flex flex-col items-center justify-center gap-3">
                    <div className="bg-blue-400 w-28 h-28 rounded-full flex items-center justify-center shadow-md">
                        <ImBubbles2 className="text-4xl text-white" />
                    </div> {/* Icon */}
                    <h2 className="text-xl">Lorem ipsum dolor</h2>
                    <p className="font-light text-sm text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                    </p>
                </div>

                <div className="child-card flex flex-col items-center justify-center gap-3">
                    <div className="bg-blue-400 w-28 h-28 rounded-full flex items-center justify-center shadow-md">
                        <ImBubbles2 className="text-4xl text-white" />
                    </div> {/* Icon */}
                    <h2 className="text-xl">Consectetur adipiscing</h2>
                    <p className="font-light text-sm text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                    </p>
                </div>

                <div className="child-card flex flex-col items-center justify-center gap-3">
                    <div className="bg-blue-400 w-28 h-28 rounded-full flex items-center justify-center shadow-md">
                        <ImBubbles2 className="text-4xl text-white" />
                    </div> {/* Icon */}
                    <h2 className="text-xl">Lorem ipsum dolor</h2>
                    <p className="font-light text-sm text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                    </p>
                </div>

                <div className="child-card flex flex-col items-center justify-center gap-3">
                    <div className="bg-blue-400 w-28 h-28 rounded-full flex items-center justify-center shadow-md">
                        <ImBubbles2 className="text-4xl text-white" />
                    </div> {/* Icon */}
                    <h2 className="text-xl">Consectetur adipiscing</h2>
                    <p className="font-light text-sm text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                    </p>
                </div>

                <div className="child-card flex flex-col items-center justify-center gap-3">
                    <div className="bg-blue-400 w-28 h-28 rounded-full flex items-center justify-center shadow-md">
                        <ImBubbles2 className="text-4xl text-white" />
                    </div> {/* Icon */}
                    <h2 className="text-xl">Lorem ipsum dolor</h2>
                    <p className="font-light text-sm text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                    </p>
                </div>

                <div className="child-card flex flex-col items-center justify-center gap-3">
                    <div className="bg-blue-400 w-28 h-28 rounded-full flex items-center justify-center shadow-md">
                        <ImBubbles2 className="text-4xl text-white" />
                    </div> {/* Icon */}
                    <h2 className="text-xl">Consectetur adipiscing</h2>
                    <p className="font-light text-sm text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
                    </p>
                </div>

            </div>
        </div>
    )
}
