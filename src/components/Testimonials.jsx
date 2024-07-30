import clientImg1 from "../images/client-1.jpeg"
import clientImg2 from "../images/client-2.jpeg"
import clientImg3 from "../images/client-3.jpeg"
import clientImg4 from "../images/client-4.jpeg"
import clientImg5 from "../images/client-5.jpeg"
import clientImg6 from "../images/client-6.jpeg"


export default function Testimonials() {
    const clients = [
        {
            name: "John Doe",
            image: clientImg1
        },
        {
            name: "Johnathan Doe",
            image: clientImg2
        },
        {
            name: "John Doe",
            image: clientImg3
        },
        {
            name: "Johnathan Doe",
            image: clientImg4
        },
        {
            name: "John Doe",
            image: clientImg5
        },
        {
            name: "Johnathan Doe",
            image: clientImg6
        },
    ]
    return (
        <section className="w-full bg-gray-200 lg:px-44 px-10 py-24 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="font-bold text-4xl">
                    WHAT OUR CLIENTS SAY
                </h2>
                <div className="w-16 h-1 bg-blue-400" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
                {
                    clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex gap-7"
                        >
                            <img src={client.image} alt="Client Image" className="w-16 h-16 rounded-full" />
                            <div className="flex flex-col gap-2">
                                <p className="italic font-extralight text-sm">
                                    ""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""
                                </p>
                                <h2>- {client.name}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
