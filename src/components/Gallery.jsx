import galleryImg1 from "../images/gallery-1.jpeg";
import galleryImg2 from "../images/gallery-2.jpeg";
import galleryImg3 from "../images/gallery-3.jpeg";
import galleryImg4 from "../images/gallery-4.jpeg";
import galleryImg5 from "../images/gallery-5.jpeg";
import galleryImg6 from "../images/gallery-6.jpeg";
import galleryImg7 from "../images/gallery-7.jpeg";
import galleryImg8 from "../images/gallery-8.jpeg";
import galleryImg9 from "../images/gallery-9.jpeg";

export default function Gallery() {
    const galleries = [
        galleryImg1,
        galleryImg2,
        galleryImg3,
        galleryImg4,
        galleryImg5,
        galleryImg6,
        galleryImg7,
        galleryImg8,
        galleryImg9
    ];

    return (
        <div className="w-full lg:px-44 px-10 py-20 flex flex-col items-center justify-center gap-10">
            <div className="flex items-center justify-center flex-col gap-3">
                <h2 className="font-bold text-4xl">GALLERY</h2>
                <div className="w-16 h-1 bg-blue-500" />
                <p className="font-light text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
                </p>
            </div>

            <div className="container grid grid-cols-1 lg:grid-cols-3 gap-0">
                {galleries.map((gallery, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer group"
                    >
                        <img src={gallery} alt={`Gallery Image ${index + 1}`} className="w-full h-auto" />
                        <div className="absolute inset-0 flex items-center justify-center bg-custom-transparent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-white font-semibold">PROJECT TITLE</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
