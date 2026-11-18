import { Fragment } from 'react'
import { announcements } from '../content'

export function AnnouncementBar() {
  // Rendered twice so the -50% translate loops seamlessly.
  const loop = [...announcements, ...announcements, ...announcements]
  return (
    <div className="group relative overflow-hidden bg-navy text-white">
      <div className="flex w-max animate-marquee items-center py-2.5 group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {loop.map((text, i) => (
              <Fragment key={i}>
                <span className="px-6 text-xs font-medium tracking-wide whitespace-nowrap text-white/90">{text}</span>
                <span className="text-sm font-semibold text-sky">+</span>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
