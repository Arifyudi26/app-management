import { StaticImageData } from "next/image";

export type Chat = {
  avatar: StaticImageData | string; // Mengizinkan StaticImageData untuk impor Next.js
  name: string;
  text: string;
  time: number;
  textCount: number;
  dot: number;
};
