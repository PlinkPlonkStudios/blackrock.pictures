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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minus cumque natus voluptatem debitis amet totam possimus at, explicabo, nam quis velit mollitia repellendus.",
  },
  {
    name: "Logan",
    imgSrc: crewImages.logan,
    role: "Pre-Producer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste aliquid mollitia ipsam doloribus saepe perspiciatis recusandae atque deleniti accusamus.",
  },
  {
    name: "Zac",
    imgSrc: crewImages.zec,
    role: "Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste aliquid mollitia ipsam doloribus saepe perspiciatis recusandae atque deleniti accusamus.",
  },
  {
    name: "Kenny",
    imgSrc: crewImages.kenny,
    role: "Head of Sound",
    description:
      "Lorem adipisicing elit. Quae minus ipsum dolor sit amet consectetur cumque natus voluptatem debitis amet totam possimus at, explicabo, nam quis velit mollitia repellendus.",
  },
  {
    name: "Zach",
    imgSrc: crewImages.zach,
    role: "DocuDubery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste aliquid mollitia ipsam doloribus saepe perspiciatis recusandae atque deleniti accusamus.",
  },
  {
    name: "Savaughn",
    imgSrc: crewImages.savaughn,
    role: "Third Dimension",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minus cumque natus voluptatem debitis amet totam possimus at, explicabo, nam quis velit mollitia repellendus.",
  },
];
