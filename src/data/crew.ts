import { crewImages } from "../images";

export interface CrewMember {
  name: string;
  imgSrc?: string;
  description: string;
  role: string;
}

export const crew: CrewMember[] = [
  {
    name: "Humza",
    imgSrc: crewImages.humza,
    role: "Chief Director",
    description:
      "He's been doing this longer than any of us can remember. With a background in film & engineering, Humza brings over a decade of expertise to every project. As the creative force behind the camera, he crafts compelling narratives that linger in your heart. From script inception to post-production, Humza leads the way, ensuring each film reflects our commitment to cinematic excellence.",
  },
  {
    name: "Logan",
    imgSrc: crewImages.logan,
    role: "Pre-Production Specialist",
    description:
      "Logan brings a passion for turning concepts into captivating stories ready for the silver screen. With a background in telecommunications, he brings 4 years of experience to the table, ensuring that every project undertaken receives meticulous attention to detail. Whether it's script analysis, casting decisions, or coordinating logistics, Logan is dedicated to crafting narratives that resonate with audiences and leave a lasting impact.",
  },
  {
    name: "Zac",
    imgSrc: crewImages.zec,
    role: "Producer & Webmaster",
    description:
      "With a flair for production and acting, Zac brings storytelling to life on and off the screen. Beyond the camera, his tech expertise shines as our web developer, ensuring a seamless online experience. Explore our site, a testament to Zac's creative prowess in both film and web, where narratives unfold and technology harmonizes with storytelling.",
  },
  {
    name: "Kenny",
    imgSrc: crewImages.kenny,
    role: "Head of Sound",
    description:
      "He embodies passion in sound, acting, and pre-production. With a keen ear for soundscapes, Kenny elevates the auditory dimension of our projects. His talent extends to acting, adding depth to on-screen narratives. In pre-production, Kenny plays a pivotal role in laying the groundwork for seamless storytelling. When lending his hand to editing, Kenny's multifaceted skills enrich our creative process, making him an invaluable asset in the world of cinematic collaboration.",
  },
  {
    name: "Zach",
    imgSrc: crewImages.zach,
    role: "Drone Operator",
    description:
      "Meet Zach, our licensed drone pilot and the self-designated fall guy. As the aerial eye capturing breathtaking perspectives, Zach brings dynamic visuals to our projects. With a keen focus on navigating the skies, he ensures our aerial shots soar to new heights. Explore the cinematic vistas crafted by Zach, where innovation takes flight, and every project reaches new heights.",
  },
  {
    name: "Savaughn",
    imgSrc: crewImages.savaughn,
    role: "Third Dimension Specialist",
    description:
      "Meet Savaughn, our computer graphics and animation maestro specializing in the mesmerizing world of 3D. With a keen eye for detail, Savaughn transforms concepts into vibrant visual spectacles. His expertise lies in bringing characters and scenes to life through cutting-edge 3D technology. Dive into our projects, where Savaughn's creativity and technical finesse merge, adding depth and (another) dimension to our cinematic storytelling.",
  },
];
