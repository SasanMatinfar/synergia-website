'use client';

import Image from 'next/image';
import { useRef } from 'react';

interface ExpandableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ExpandableImage({ src, alt, width, height }: ExpandableImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" onClick={() => dialogRef.current?.showModal()} className="group block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-academic-blue" aria-label="Enlarge full-sphere Ambisonics array CAD drawing">
        <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 1000px, 100vw" className="h-auto w-full object-contain transition-opacity group-hover:opacity-90" />
      </button>
      <dialog ref={dialogRef} className="m-auto max-h-[94vh] w-[96vw] max-w-7xl rounded-xl bg-white p-3 shadow-2xl backdrop:bg-academic-navy/80" onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}>
        <div className="flex justify-end pb-2">
          <button type="button" onClick={() => dialogRef.current?.close()} className="rounded-md px-3 py-2 text-sm font-semibold text-academic-navy hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-academic-blue">Close</button>
        </div>
        <div className="max-h-[82vh] overflow-auto">
          <Image src={src} alt={alt} width={width} height={height} sizes="96vw" className="h-auto min-w-[800px] max-w-none lg:min-w-0 lg:max-w-full" />
        </div>
      </dialog>
    </>
  );
}
