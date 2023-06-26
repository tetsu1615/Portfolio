/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        source: '/sic',
        destination: 'https://www.sic.utsunomiya-u.ac.jp/report/7%e6%9c%8821%e6%97%a5%e3%81%ab%e7%a4%be%e4%bc%9a%e5%85%b1%e5%89%b5%e4%bf%83%e9%80%b2%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e3%81%ae%e4%bc%9a%e6%89%80%e5%bc%8f%e3%81%8c%e8%a1%8c%e3%82%8f%e3%82%8c.html',
        permanent: true
      }
    ];
  }
};
