
import { Inter } from "next/font/google";
import Marquee from '../components/marquee';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Marquee speed={50}><p>This is some long ahh text. </p></Marquee>
    </main>
  );
}
