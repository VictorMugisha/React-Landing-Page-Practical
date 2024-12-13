import { ImBubbles2 } from "react-icons/im";
import { ImBullhorn } from "react-icons/im";
import { ImEyedropper } from "react-icons/im";
import { ImUsers } from "react-icons/im";

export default function Features() {
    return (
        <section className="w-full bg-gray-200 lg:px-44 px-10 py-10 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="font-bold text-4xl">
                    FEATURES
                </h2>
                <div className="w-16 h-1 bg-blue-400" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between py-14 gap-6">
                
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-blue-500 w-28 h-28 rounded-full flex items-center justify-center">
                        <ImBubbles2 className="text-4xl text-white" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-xl py-4">Lorem Ipsum</h2>
                        <p className="text-center font-extralight text-sm">
                            Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-blue-500 w-28 h-28 rounded-full flex items-center justify-center">
                        <ImBullhorn className="text-4xl text-white" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-xl py-4">Lorem Ipsum</h2>
                        <p className="text-center font-extralight text-sm">
                            Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-blue-500 w-28 h-28 rounded-full flex items-center justify-center">
                        <ImUsers className="text-4xl text-white" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-xl py-4">Lorem Ipsum</h2>
                        <p className="text-center font-extralight text-sm">
                            Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-blue-500 w-28 h-28 rounded-full flex items-center justify-center">
                        <ImEyedropper className="text-4xl text-white" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-xl py-4">Lorem Ipsum</h2>
                        <p className="text-center font-extralight text-sm">
                            Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
