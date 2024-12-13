import teamImg1 from "../images/team-1.jpeg"
import teamImg2 from "../images/team-2.jpeg"
import teamImg3 from "../images/team-3.jpeg"
import teamImg4 from "../images/team-4.jpeg"

export default function Team() {
    const teamMembers = [
        {
            name: "John Doe",
            image: teamImg1,
            role: "Director"
        },
        {
            name: "Mike Doe",
            image: teamImg2,
            role: "Senior Designer"
        },
        {
            name: "Jane Doe",
            image: teamImg3,
            role: "Senior Designer"
        },
        {
            name: "Karen Doe",
            image: teamImg4,
            role: "Project Manager"
        },
    ]
    return (
        <div className="w-full lg:px-44 px-10 py-20 flex flex-col items-center justify-center gap-10">
            <div className="flex items-center justify-center flex-col gap-3">
                <h2 className="font-bold text-4xl">MEET THE TEAM</h2>
                <div className="w-16 h-1 bg-blue-500" />
                <p className="font-light text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {
                    teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-1"
                        >
                            <img src={member.image} alt="Team Member Image" />
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="font-light text-sm">{member.role}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
