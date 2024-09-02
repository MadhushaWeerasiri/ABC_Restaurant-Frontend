import React, { useEffect } from "react";
import Menu from "./Menu"
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        const userRole = sessionStorage.getItem('userRole');
        if (!userId || userRole !== '2') {
            navigate('/login');
        }
    }, []);

    return (
        <Box>
            <Menu />
            <Box
                component="main"
                sx={{
                    padding: '30px 40px',
                    marginLeft: '240px'
                }}
            >
                <Box>
                    <Typography variant="h5">
                        Introduction
                    </Typography>
                    <Typography paragraph>
                        Space exploration has captivated human imagination and scientific inquiry for centuries. From the early days of stargazing to the monumental achievements of landing humans on the Moon, space exploration has evolved into a multifaceted endeavor that spans multiple disciplines and national boundaries. Its significance lies not only in the quest for knowledge and the desire to understand our place in the universe but also in the technological advancements and international collaborations it has fostered.
                    </Typography>

                    <Typography paragraph>
                        In this essay, we will explore the rich history of space exploration, from its nascent stages to the present-day achievements and future prospects. We will delve into the pivotal moments that defined the Space Age, examine the contributions of both governmental and private entities, and discuss the ethical and environmental considerations that accompany our ventures into the cosmos.
                    </Typography>

                    <Typography variant="h5">
                        Early History of Space Exploration
                    </Typography>
                    <Typography variant="h6">
                        Pre-Space Age Explorations and Observations
                    </Typography>
                    <Typography paragraph>
                        Long before the advent of modern rocketry, humans have been fascinated by the night sky. Ancient civilizations, such as the Babylonians, Greeks, and Mayans, made significant strides in astronomy, charting the movements of celestial bodies and developing early theories about the universe. These early observations laid the groundwork for future explorations by establishing a fundamental understanding of the cosmos.
                    </Typography>

                    <Typography variant="h5">
                        The Dawn of the Space Age
                    </Typography>
                    <Typography paragraph>
                        The true dawn of space exploration began in the early 20th century with the development of rocketry. Visionaries like Konstantin Tsiolkovsky, Robert Goddard, and Hermann Oberth made significant contributions to the field of astronautics. Tsiolkovsky, a Russian scientist, formulated the rocket equation, which describes the motion of vehicles propelled by rockets. Goddard, an American physicist, successfully launched the world's first liquid-fueled rocket in 1926, demonstrating the potential for controlled space travel.
                    </Typography>

                    <Typography variant="h6">
                        Sputnik and the Space Race
                    </Typography>
                    <Typography paragraph>
                        The launch of Sputnik 1 by the Soviet Union in 1957 marked the beginning of the Space Age. As the first artificial satellite to orbit Earth, Sputnik 1 demonstrated the feasibility of space travel and ignited the Space Race between the United States and the Soviet Union. This period saw rapid advancements in space technology, driven by national pride and the strategic importance of space dominance.
                    </Typography>

                    <Typography variant="h5">
                        The Apollo Era
                    </Typography>
                    <Typography variant="h6">
                        The Apollo Program and Its Significance
                    </Typography>
                    <Typography paragraph>
                        The Apollo program, initiated by NASA in the 1960s, aimed to land humans on the Moon and safely return them to Earth.This ambitious goal was driven by President John F.Kennedy's vision and the geopolitical pressures of the Cold War. The Apollo program not only achieved its primary objective but also spurred technological innovations and scientific discoveries that have had lasting impacts.
                    </Typography>
                    < Typography variant="h6" >
                        The Moon Landings
                    </Typography >
                    <Typography paragraph>
                        Apollo 11, launched in 1969, was the first mission to successfully land humans on the Moon.Astronauts Neil Armstrong and Edwin "Buzz" Aldrin became the first humans to set foot on the lunar surface, while Michael Collins orbited above.The iconic words "That's one small step for man, one giant leap for mankind" encapsulated the significance of this achievement.Subsequent Apollo missions continued to explore the Moon, conducting scientific experiments and collecting valuable data.
                    </Typography >

                    <Typography variant="h5">
                        Technological Advancements and Their Impact
                    </Typography>
                    <Typography paragraph>
                        The technological advancements of the Apollo era extended beyond space exploration.Innovations in materials science, computer technology, and telecommunications found applications in various industries.The Apollo program also demonstrated the value of large - scale government investment in research and development, paving the way for future space missions and technological progress.
                    </Typography >

                    <Typography variant="h5">
                        The Shuttle Era
                    </Typography>
                    <Typography variant="h6">
                        Introduction of the Space Shuttle Program
                    </Typography>
                    <Typography paragraph>
                        The Space Shuttle program, initiated in the 1970s, represented a new phase in space exploration.Unlike previous spacecraft, the Space Shuttle was designed to be reusable, with the ability to carry astronauts and cargo to low Earth orbit.The first operational flight, STS - 1, took place in 1981 with the launch of Space Shuttle Columbia.
                    </Typography >

                    <Typography variant="h6">
                        Key Missions and Achievements
                    </Typography>
                    <Typography paragraph>
                        The Space Shuttle program facilitated numerous significant missions, including the deployment of satellites, scientific research in microgravity, and the construction of the International Space Station(ISS).Notable missions include the repair of the Hubble Space Telescope and the launch of interplanetary probes.
                    </Typography >

                    <Typography variant="h5">
                        Challenges and Disasters
                    </Typography>
                    <Typography paragraph>
                        Despite its successes, the Space Shuttle program faced significant challenges and tragedies.The Challenger disaster in 1986 and the Columbia disaster in 2003 resulted in the loss of both crews and highlighted the inherent risks of space travel.These incidents led to extensive investigations and safety improvements but also underscored the need for continual vigilance in space missions.
                    </Typography >

                    <Typography variant="h5">
                        International Space Collaboration
                    </Typography>
                    <Typography variant="h6">
                        The International Space Station (ISS)
                    </Typography>
                    <Typography paragraph>
                        The ISS stands as a testament to international collaboration in space exploration.Initiated in the late 1990s, the ISS is a joint project involving NASA, Roscosmos, ESA, JAXA, and CSA.Orbiting Earth at an altitude of approximately 400 kilometers, the ISS serves as a microgravity laboratory for scientific research and a platform for testing technologies for future space missions.
                    </Typography >

                    <Typography variant="h6">
                        Contributions from Various Countries
                    </Typography>
                    <Typography paragraph>
                        Countries around the world have made significant contributions to the ISS.For instance, Russia provided the initial modules and Soyuz spacecraft for crew transport, while the European Space Agency(ESA) contributed the Columbus laboratory module.Japan's Kibo module and Canada's robotic arm, Canadarm2, are other notable contributions.
                    </Typography >

                    <Typography variant="h6">
                        The Role of International Cooperation
                    </Typography>
                    <Typography paragraph>
                        International cooperation in space exploration has fostered a spirit of collaboration and shared knowledge.It has enabled countries to pool resources, share expertise, and undertake ambitious projects that would be challenging for any single nation to achieve alone.The ISS serves as a model for future international endeavors in space exploration.
                    </Typography >

                    <Typography variant="h5">
                        Robotic Exploration
                    </Typography>
                    <Typography variant="h6">
                        Mars Rovers and Their Missions
                    </Typography>
                    <Typography paragraph>
                        Robotic exploration of Mars has yielded valuable insights into the planet's geology, climate, and potential for life. NASA's Mars rover missions, including Spirit, Opportunity, Curiosity, and Perseverance, have conducted extensive surface exploration, analyzing rocks, soil, and atmospheric conditions.These missions have provided evidence of past water activity on Mars and have paved the way for future human missions.
                    </Typography >

                    <Typography variant="h6">
                        Probes to the Outer Planets
                    </Typography>
                    <Typography paragraph>
                        Robotic probes have ventured beyond Mars to explore the outer planets and their moons.Missions such as Voyager 1 and 2, Galileo, and Cassini have provided detailed observations of Jupiter, Saturn, Uranus, and Neptune.These missions have expanded our understanding of the solar system's dynamics, including the complex atmospheres and magnetospheres of the gas giants.
                    </Typography >

                    <Typography variant="h6">
                        The Search for Extraterrestrial Life
                    </Typography>
                    <Typography paragraph>
                        One of the most intriguing aspects of space exploration is the search for extraterrestrial life.Missions such as the Mars rovers, the Europa Clipper, and the James Webb Space Telescope aim to detect signs of life or habitable conditions beyond Earth.The discovery of microbial life or even complex organisms would have profound implications for our understanding of life in the universe.
                    </Typography >

                    <Typography variant="h5">
                        Private Sector Involvement
                    </Typography>
                    <Typography variant="h6">
                        Emergence of Private Space Companies
                    </Typography>
                    <Typography paragraph>
                        In recent years, the private sector has played an increasingly prominent role in space exploration.Companies like SpaceX, Blue Origin, and Virgin Galactic have developed advanced rockets and spacecraft, reducing the cost of access to space and opening new possibilities for commercial space travel.
                    </Typography >

                    <Typography variant="h6">
                        Notable Private Missions and Innovations
                    </Typography>
                    <Typography paragraph>
                        SpaceX's Falcon 1, Falcon 9, and Dragon spacecraft have achieved significant milestones, including the first privately-funded spacecraft to reach orbit and the first private company to dock with the ISS. Blue Origin's New Shepard and New Glenn rockets aim to facilitate space tourism and orbital missions.These private ventures are pushing the boundaries of space exploration and driving innovation in the industry.
                    </Typography >

                    <Typography variant="h6">
                        The Commercialization of Space Travel
                    </Typography>
                    <Typography paragraph>
                        The commercialization of space travel is transforming the space industry.Private companies are developing space tourism offerings, satellite deployment services, and plans for human colonization of other planets.This shift towards commercial space exploration is creating new economic opportunities and expanding the reach of space exploration.
                    </Typography >

                    <Typography variant="h5">
                        Future of Space Exploration
                    </Typography>
                    <Typography paragraph>
                        Planned Missions to the Moon and Mars
                    </Typography >
                    <Typography paragraph>
                        Future missions to the Moon and Mars are at the forefront of space exploration efforts.NASA's Artemis program aims to return humans to the Moon by the mid-2020s, with plans to establish a sustainable presence on the lunar surface. Mars missions, such as NASA's Perseverance rover and SpaceX's Starship, are paving the way for human exploration of the Red Planet.
                    </Typography >

                    <Typography variant="h6">
                        Advances in Technology and Propulsion
                    </Typography>
                    <Typography paragraph>
                        Advances in technology and propulsion are critical for the future of space exploration.Developments in ion propulsion, nuclear thermal propulsion, and in -space manufacturing are expected to enhance the efficiency and capabilities of space missions.These technologies will enable faster travel to distant destinations and support long - duration missions.
                    </Typography >

                    <Typography variant="h6">
                        The Potential for Human Colonization of Other Planets
                    </Typography>
                    <Typography paragraph>
                        The potential for human colonization of other planets is a topic of great interest and debate.Establishing permanent human settlements on the Moon, Mars, or other celestial bodies presents numerous challenges, including life support systems, radiation protection, and sustainable resource utilization.However, the pursuit of colonization could ensure the survival of humanity and open new frontiers for exploration.
                    </Typography >

                    <Typography variant="h6">
                        Ethical and Environmental Considerations
                    </Typography>
                    <Typography>
                        Ethical Implications of Space Colonization
                    </Typography>
                    <Typography paragraph>
                        Space colonization raises several ethical questions.The potential for disrupting pristine environments, the rights and responsibilities of settlers, and the ethical treatment of any discovered life forms are important considerations.Addressing these ethical issues is essential for responsible space exploration.
                    </Typography >

                    <Typography variant="h6">
                        Environmental Impact of Space Missions
                    </Typography>
                    <Typography paragraph>
                        Space missions can have significant environmental impacts, both on Earth and in space.The launch of rockets generates greenhouse gases and other pollutants, while space debris poses risks to satellites and space stations.Mitigating these impacts through sustainable practices and policies is crucial for the long - term viability of space exploration.
                    </Typography >

                    <Typography variant="h6">
                        The Debate Over Space Resource Utilization
                    </Typography>
                    <Typography paragraph>
                        The utilization of space resources, such as mining asteroids for minerals or extracting water from the Moon, is a contentious issue.Proponents argue that it could provide valuable resources for space missions and reduce the environmental impact on Earth.Critics, however, caution against the potential for exploitation and the need for international regulations to govern resource utilization.
                    </Typography >

                    <Typography variant="h5">
                        Conclusion
                    </Typography>
                    <Typography paragraph>
                        Space exploration has come a long way since the early days of stargazing and rocketry.From the historic achievements of the Apollo program to the collaborative efforts of the ISS and the innovative contributions of the private sector, space exploration continues to push the boundaries of human knowledge and capability.As we look to the future, planned missions to the Moon and Mars, advances in technology, and the potential for human colonization of other planets hold exciting possibilities.
                    </Typography >

                    <Typography paragraph>
                        However, the pursuit of space exploration must be balanced with ethical and environmental considerations. Responsible exploration, guided by international cooperation and sustainable practices, will ensure that the benefits of space exploration are realized while preserving the integrity of the cosmos. The journey into space is far from over, and the discoveries and advancements yet to come will undoubtedly shape the future of humanity.
                    </Typography>
                </Box>
            </Box >
        </Box >
    )
}