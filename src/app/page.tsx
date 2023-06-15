import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-full leading-7 text-center'>
      <h1 className='text-3xl text-black mt-20'>Ittetsu Takaki<br className='block sm:hidden' /> <span className='hidden sm:inline-block' >-</span> Portfolio Site</h1>
      <div className='wip tracking-widest font-normal'>
        <p className='mt-4'>now building...</p>
        <small className='mt-2'>Last Edited: 2023/06/03 15:00</small>
      </div>
      <div className='flex gap-4 justify-center mt-2'>
        <a href="https://twitter.com/tetsuuniv/" className='text-blue-500 hover:opacity-80 hover:underline'>Twitter</a>
        <a href="mailto:tetsu@1-fe.net" className='text-blue-500 hover:opacity-80 hover:underline'>Mail</a>
      </div>
    </main>
  )
}
