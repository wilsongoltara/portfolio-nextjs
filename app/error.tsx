'use client';

import Link from '@components/Link';
import { useEffect } from 'react';

export default function AppError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    // aqui é um ponto bom pra plugar Sentry/telemetria no futuro
    // sem poluir a UI com logs
    console.error(error);
  }, [error]);

  return (
    <div className="size-box text-center">
      <h1 className="text-3xl md:text-4xl text-gray-200 font-bold uppercase">
        Algo deu errado
      </h1>
      <p className="mt-3 text-gray-400">Tente recarregar ou voltar para a home.</p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          className="button-bg px-4 py-2 rounded"
          onClick={() => reset()}
        >
          Recarregar
        </button>
        <Link href="/" className="button-bg px-4 py-2 rounded">
          Ir para home
        </Link>
      </div>
    </div>
  );
}

