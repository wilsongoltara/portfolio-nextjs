'use client';

import Card from '@components/Card';
import { projects } from '@lib/projects';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export default function ProjectsCarousel() {
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const count = projects.length;

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollerRef.current;
    if (!el) return;

    const next = clamp(index, 0, count - 1);
    const item = el.children.item(next) as HTMLElement | null;
    item?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [count]);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < count - 1;

  const items = useMemo(() => projects, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;

      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      for (let i = 0; i < children.length; i += 1) {
        const child = children[i];
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const dist = Math.abs(childCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      }

      setActiveIndex(bestIdx);
    };

    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="w-full max-w-3xl min-w-[320px]">
      <div className="flex items-center justify-between gap-3 mb-3">
        <button
          type="button"
          className="button-bg px-3 py-2 rounded disabled:opacity-40"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={!canGoPrev}
          aria-label="Projeto anterior"
        >
          Anterior
        </button>

        <span className="text-sm text-gray-300">
          {activeIndex + 1}/{count}
        </span>

        <button
          type="button"
          className="button-bg px-3 py-2 rounded disabled:opacity-40"
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={!canGoNext}
          aria-label="Próximo projeto"
        >
          Próximo
        </button>
      </div>

      <ul
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 px-1 pb-2"
      >
        {items.map(({ description, link, nameProject, pathImage }, idx) => (
          <li
            key={nameProject}
            className="snap-center shrink-0 w-full max-w-2xl"
          >
            <Card
              description={description}
              link={link}
              nameProject={nameProject}
              pathImage={pathImage}
              isSelected={idx === activeIndex}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
