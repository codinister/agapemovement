import { NextRequest, NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import serverConfig from '@/state/sanity/server.config';

export async function GET(req: NextRequest) {
  const { url, headers } = req;
  const request = headers.get('x-api-key');

  if (request !== process.env.SERVER_CONFIG) {
    return NextResponse.redirect(new URL('/', url));
  }

  try {
    const result = await serverConfig.fetch(groq`*[_type == 'hero']{
      title,
      motto,
      'image': image.asset->url
    }`);

    return NextResponse.json(result);
  } catch (err) {
    console.log(err);
  }
}



  

