import { listSlugs, getPageContent } from '../../lib/content.cjs';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = listSlugs();
  return slugs.map(s => ({ slug: s }));
}

export default function Page({ params }) {
  const data = getPageContent(params.slug);
  if (!data) {
    return <div className="container py-16"><h1 className="text-2xl font-semibold">Not found</h1></div>
  }
  return (
    <main className="container py-12">
      <article className="prose prose-invert max-w-none">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </article>
      <div className="mt-6"><Link href="/" className="btn-ghost">← Back</Link></div>
    </main>
  )
}
