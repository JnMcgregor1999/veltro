import { Link } from 'react-router-dom'

import { useDocumentTitle } from '@/hooks/use-document-title'

export function NotFoundPage() {
  useDocumentTitle('Page not found | Veltro Appliances')

  return (
    <main
      id="main"
      className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-28 text-center"
    >
      <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-blue">
        404
      </p>
      <h1 className="mt-4 text-4xl font-black tracking-[-0.035em] text-brand-navy sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg leading-8 text-slate-500">
        The page you are looking for does not exist. Let us get you back to the
        repair service.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-brand-yellow px-7 py-4 font-extrabold text-brand-navy transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </main>
  )
}
