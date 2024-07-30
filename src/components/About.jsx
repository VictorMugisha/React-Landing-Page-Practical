import { aboutServises } from "../data/aboutServises"
import aboutImg from "../images/about.jpeg"
import { ImCheckmark } from "react-icons/im";

export default function About() {
    return (
        <div className="w-full lg:px-44 px-10 py-20 flex flex-col lg:flex-row items-center justify-center gap-10">
            <img src={aboutImg} alt="About Image" width={400} />
            <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-2">
                    <h2 className="font-bold text-4xl">
                        ABOUT
                    </h2>
                    <div className="w-16 h-1 bg-blue-400" />
                </div>
                <p className="font-extralight text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div>
                    <h3 className="pb-4 font-semibold text-lg">Why Choose Us?</h3>
                    <div className="flex flex-col lg:max-h-28 flex-wrap gap-2 pl-4">
                        {
                            aboutServises.map(service => (
                                <p
                                    className="font-extralight text-sm flex items-center gap-2"
                                >
                                    <span><ImCheckmark className="text-[10px] text-blue-400" /></span>
                                    <span>
                                        {service}
                                    </span>
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
