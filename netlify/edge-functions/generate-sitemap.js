// functions/generate-sitemap.js

export default async (request, context) => {
  const domain = new URL(request.url).host;

  const response = await context.next();
  const page = await response.text();

  const regex = /UNKNOWN_DOMAIN/g;
  
  const sitemap = page.replaceAll(regex, domain);

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
