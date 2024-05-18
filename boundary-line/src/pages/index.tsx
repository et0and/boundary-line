
import { Inter } from "next/font/google";
import Marquee from '../components/marquee';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Marquee text="This is some long ahh text." speed={50} />
    </main>
  );
}
