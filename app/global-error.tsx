'use client';

import Link from '@components/Link';

export default function GlobalError({
  error,
}: Readonly<{
  error: Error & { digest?: string };
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="size-box text-center">
          <h1 className="text-3xl md:text-4xl text-gray-200 font-bold uppercase">
            Erro inesperado
          </h1>
          <p className="mt-3 text-gray-400">
            Se isso persistir, dá pra abrir uma issue com o digest.
          </p>
          {error?.digest ? (
            <p className="mt-2 text-sm text-gray-500">Digest: {error.digest}</p>
          ) : null}

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/" className="button-bg px-4 py-2 rounded">
              Voltar para home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

