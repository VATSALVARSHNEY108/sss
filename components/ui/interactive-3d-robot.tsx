'use client';

import { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const handleLoad = (splineApp: any) => {
    try {
      if (splineApp?._canvas?.parentElement) {
        const parent = splineApp._canvas.parentElement;
        const links = parent.querySelectorAll('a, #spline-watermark, [class*="watermark"], [class*="logo"]');
        links.forEach((el: any) => el.remove());
      }
    } catch (e) {
      // ignore DOM errors
    }
  };

  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex items-center justify-center bg-transparent text-white ${className}`}>
          <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
          </svg>
        </div>
      }
    >
      <div className="relative w-full h-full overflow-hidden [&_a]:!hidden [&_a]:!pointer-events-none [&_#spline-watermark]:!hidden">
        <Spline
          scene={scene}
          className={className}
          onLoad={handleLoad}
        />
        {/* Overlay cover for bottom-right watermark area */}
        <div className="absolute bottom-6 right-6 z-30 pointer-events-none flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/95 border border-blue-500/50 text-blue-400 text-sm font-bold tracking-wider backdrop-blur-md shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
          SKILLYUG AI
        </div>
      </div>
    </Suspense>
  );
}
