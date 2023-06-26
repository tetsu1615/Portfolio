import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'

const nsj = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-nsj' })

export const metadata = {
  title: 'Ittetsu Takaki - Portfolio Site',
  description: '高木壱哲のポートフォリオサイトです。 This is a portfolio site of Ittetsu Takaki. I am a enginner and designer in Japan. I am in Utsunomiya University.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/** Yu Gothic + Futura PT from adobe font */}
        <script dangerouslySetInnerHTML={{
          __html: `
              (function(d) {
              var config={
                kitId: 'vfb2eyo' ,
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)})(document);
            `
        }} /></head>
      <body >{children}</body>
    </html>
  )
}
