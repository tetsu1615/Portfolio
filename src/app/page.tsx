import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-h-full leading-7'>
      <h1 className='mb-4 mt-10 text-center text-3xl text-black'>Ittetsu Takaki<br className='block sm:hidden' /> <span className='hidden sm:inline-block' >-</span> Portfolio Site</h1>

      {/*<article className="mx-auto max-w-5xl">
        <h2 className="s-title mb-4 text-2xl">Works - 制作事例</h2>
        <div>
          <h3 className="work-title">ノーコードアプリ「マチナカベンチ」開発</h3>
          <div className="tag">
            <p>illustrator</p><p>Figma</p><p>Web</p><p>Application</p><p>NoCodeDevelopment</p>
          </div>
          <Link href="https://nocodejapan.org/media/machinakabench/" className='hover:text-orange-500 hover:underline hover:opacity-80'>
            ▶ 関連サイト
          </Link>
        </div>
      </article>*/}

      <iframe className='mx-auto w-full max-w-5xl' style={{ "height": "80vh" }} src="https://v2-embednotion.com/Portfolio-cb811b66827c4c55b313d3123ed0c835?pvs=4"></iframe>
      <div className='mt-1 text-center '>
        <Link className='mx-auto mb-6 w-fit bg-black px-2 text-xl text-white ' href={"https://tetsuit.notion.site/Portfolio-cb811b66827c4c55b313d3123ed0c835"}>👀 View in Notion</Link>
      </div>

      <div className='mt-2 flex justify-center gap-4 text-center'>
        <Link href="https://twitter.com/tetsuuniv/" className='text-blue-500 hover:underline hover:opacity-80'>Twitter</Link>
        <Link href="mailto:tetsu@1-fe.net" className='text-blue-500 hover:underline hover:opacity-80'>Mail</Link>
      </div>
    </main>
  )
}
