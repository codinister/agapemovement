import { NextRequest, NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import serverConfig from '@/state/sanity/server.config';

export const dynamic = 'force-dynamic'
export const revalidate = 0
export async function GET(req: NextRequest) {
  const { url, headers } = req;
  const request = headers.get('x-api-key');

  if (request !== process.env.SERVER_CONFIG) {
    return NextResponse.redirect(new URL('/', url));
  }

  try {
    const result = await serverConfig.fetch(groq`*[_type == 'settings']{
     title,
      location,
      phone1,
      phone2,
      email,
      facebook,
      instagram,
      twitter,
      'logo': logo.asset->url
    }`);

    return NextResponse.json(result);
  } catch (err) {
    console.log(err);
  }
}
  
  
      