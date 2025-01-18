

import { Montserrat ,Playfair_Display, Bebas_Neue , Dancing_Script } from "next/font/google";
export const  montosert = Montserrat({ subsets: ["latin"] ,
  weight: ['400', '700']
});

export const stylefont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"]
});