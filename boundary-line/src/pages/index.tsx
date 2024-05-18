import { EB_Garamond } from "next/font/google";
import Marquee from "react-fast-marquee";
import Head from "next/head";

const eb_Garamond = EB_Garamond({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Boundary line (lessons)</title>
        <meta
          property="og:title"
          content="Boundary line (lessons)"
          key="title"
        />
        <meta
          property="twitter:title"
          content="Boundary line (lessons)"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          property="description"
          content="Where I end and you begin (for Dumb Type, in memoriam). "
        />
        <meta
          property="og:description"
          content="Where I end and you begin (for Dumb Type, in memoriam). "
        />
        <meta
          property="twitter:description"
          content="Where I end and you begin (for Dumb Type, in memoriam). "
        />
        <meta property="og:url" content="https://work.tom.so/boundary-line" />
        <meta property="og:image" content="/boundary-line/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/boundary-line/og.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/boundary-line/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/boundary-line/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/boundary-line/favicon-16x16.png"
        />
        <link rel="manifest" href="/boundary-line/site.webmanifest" />
      </Head>
      <main
        className={`dark:bg-black dark:text-gray-50 flex min-h-screen flex-col py-24 ${eb_Garamond.className}`}
      >
        <Marquee speed={100}>
          <p className="text-xl">
            What is Geography? What is the Earth? What is the shape of the
            Earth? Of what is the Earth composed?
          </p>
        </Marquee>
        <Marquee className="p-6" speed={50}>
          <p className="text-4xl">
            帝国は誰が統治しますか？ 王国は誰が統治しますか？
            共和国は誰が統治しますか？
          </p>
        </Marquee>
        <Marquee speed={130} delay={3} direction="right">
          <p className="text-sm">
            What is a Continent? How many Continents are there? On which
            Continent do we live? What are the divisions of the Western
            Continent?
          </p>
        </Marquee>
        <Marquee speed={100}>
          <p className="text-xs">
            川は何によって形成されますか？ 泉とは何ですか？
            小川は何と呼ばれますか？
          </p>
        </Marquee>
        <Marquee className="p-4" speed={90} delay={1}>
          <p className="text-3xl font-semibold">
            What are the divisions of the Eastern Continent? What is an Ocean?
            How many Oceans are there?
          </p>
        </Marquee>
        <Marquee speed={70} delay={1} direction="right">
          <p className="text-xl">
            海とは何ですか？ 湾や入り江とは何ですか？ 川とは何ですか？
          </p>
        </Marquee>
        <Marquee speed={94} delay={2}>
          <p className="text-xs">
            Which is the largest Ocean? What is an Island? What is a Peninsula?
          </p>
        </Marquee>
        <Marquee speed={100} delay={5} direction="right">
          <p className="text-xl">
            火山とは何ですか？ 谷とは何ですか？ 平原とは何ですか？
            砂漠とは何ですか？
          </p>
        </Marquee>
        <Marquee speed={100} direction="right">
          <p className="text-xl">
            What is a Lake? What is an Isthmus? What is a Strait?
          </p>
        </Marquee>
        <Marquee className="p-6" speed={100} delay={1}>
          <p className="text-4xl">
            岬とは何ですか？ 山とは何ですか？ 丘とは何ですか？
          </p>
        </Marquee>
        <Marquee className="p-6" speed={100} delay={1}>
          <p className="text-4xl font-bold">
            What is a Cape? What is a Mountain? What is a Hill?
          </p>
        </Marquee>
        <Marquee speed={100}>
          <p className="text-xl">
            湖とは何ですか？ 地峡とは何ですか？ 海峡とは何ですか？
          </p>
        </Marquee>
        <Marquee speed={100} delay={5}>
          <p className="text-xl">
            What is a Volcano? What is a Valley? What is a Plain? What is a
            Desert?
          </p>
        </Marquee>
        <Marquee speed={94} delay={2}>
          <p className="text-xs">
            最大の海洋はどれですか？ 島とは何ですか？ 半島とは何ですか？
          </p>
        </Marquee>
        <Marquee speed={70} delay={1}>
          <p className="text-xl">
            What is a Sea? What is a Gulf or Bay? What is a River?
          </p>
        </Marquee>
        <Marquee className="p-4" speed={90} delay={1} direction="right">
          <p className="text-3xl font-bold">
            東大陸の区分は何ですか？ 海洋とは何ですか？ 海洋はいくつありますか？
          </p>
        </Marquee>
        <Marquee speed={100}>
          <p className="text-xs">
            By what are Rivers formed? What is a Spring? What are Small Streams
            called?
          </p>
        </Marquee>
        <Marquee speed={130} delay={3}>
          <p className="text-sm">
            大陸とは何ですか？ 大陸はいくつありますか？
            私たちはどの大陸に住んでいますか？ 西大陸の区分は何ですか？
          </p>
        </Marquee>
        <Marquee className="p-6" speed={50}>
          <p className="text-4xl">
            Who governs an Empire? Who governs a Kingdom? Who governs a
            Republic?
          </p>
        </Marquee>
        <Marquee speed={100}>
          <p className="text-xl">
            地理とは何ですか？ 地球とは何ですか？ 地球の形は何ですか？
            地球は何で構成されていますか？
          </p>
        </Marquee>
      </main>
    </>
  );
}
