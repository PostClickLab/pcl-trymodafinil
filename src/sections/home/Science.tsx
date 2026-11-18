import { useId } from 'react'
import { Check, X } from 'lucide-react'
import { science } from '../../content'
import { BenefitsStrip } from '../../components/blocks'
import { Card, Container, Reveal, SectionHeading } from '../../components/ui'
import { cn } from '../../lib/cn'

/* ------------------------------- Chart ------------------------------------ */

const W = 560
const H = 270
const PAD = { l: 18, r: 18, t: 20, b: 34 }
const x = (hour: number) => PAD.l + ((hour - 8) / 12) * (W - PAD.l - PAD.r)
const y = (v: number) => PAD.t + (1 - v / 100) * (H - PAD.t - PAD.b)

// [hour of day, alertness 0–100] — illustrative curves only.
const MODAFINIL: Array<[number, number]> = [
  [8, 24], [9, 60], [10, 78], [11, 83], [12, 84], [13, 84], [14, 83],
  [15, 83], [16, 82], [17, 80], [18, 77], [19, 71], [20, 63],
]
const COFFEE: Array<[number, number]> = [
  [8, 24], [8.8, 80], [9.5, 88], [10.6, 52], [11.5, 34], [12.3, 80], [13.1, 70],
  [14.1, 36], [14.8, 30], [15.6, 74], [16.4, 60], [17.4, 30], [18.6, 26], [20, 20],
]
const TICKS = [
  [8, '8AM'], [10, '10AM'], [12, '12PM'], [14, '2PM'], [16, '4PM'], [18, '6PM'], [20, '8PM'],
] as const

/** Catmull-Rom spline through the points, as an SVG cubic path. */
function smoothPath(points: Array<[number, number]>) {
  const p = points.map(([h, v]) => [x(h), y(v)])
  let d = `M ${p[0][0]},${p[0][1]}`
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i]
    const p1 = p[i]
    const p2 = p[i + 1]
    const p3 = p[i + 2] ?? p2
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += ` C ${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${p2[0]},${p2[1]}`
  }
  return d
}

export function AlertnessChart() {
  const gid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const modPath = smoothPath(MODAFINIL)
  const area = `${modPath} L ${x(20)},${y(0)} L ${x(8)},${y(0)} Z`
  const { chart } = science

  return (
    <Card className="flex h-full flex-col p-6 sm:p-8" hover={false}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{chart.title}</h3>
        <div className="flex items-center gap-5 text-xs font-medium text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-[3px] w-5 rounded-full bg-primary" />
            {chart.legendModafinil}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-5 border-t-2 border-dashed border-muted/60" />
            {chart.legendCoffee}
          </span>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="my-auto w-full pt-6" role="img" aria-label="Illustrative chart: modafinil keeps alertness steady from 8AM to 8PM while coffee spikes and crashes">
        <defs>
          <linearGradient id={`area-${gid}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#2a6cb0" stopOpacity="0.28" />
            <stop offset="1" stopColor="#2a6cb0" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[25, 50, 75, 100].map((v) => (
          <line key={v} x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} stroke="#0b1f4d" strokeOpacity="0.07" />
        ))}
        <line x1={PAD.l} x2={W - PAD.r} y1={y(0)} y2={y(0)} stroke="#0b1f4d" strokeOpacity="0.18" />

        <path d={area} fill={`url(#area-${gid})`} />
        <path d={smoothPath(COFFEE)} fill="none" stroke="#94a3b8" strokeWidth="2.25" strokeDasharray="6 6" strokeLinecap="round" />
        <path d={modPath} fill="none" stroke="#2a6cb0" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx={x(14)} cy={y(83)} r="5.5" fill="#fff" stroke="#2a6cb0" strokeWidth="3" />

        {TICKS.map(([h, label]) => (
          <text key={label} x={x(h)} y={H - 10} textAnchor="middle" fill="#64748b" style={{ font: '500 11px Inter, sans-serif' }}>
            {label}
          </text>
        ))}
        <text x={PAD.l + 4} y={PAD.t - 6} fill="#64748b" style={{ font: '600 10px Inter, sans-serif', letterSpacing: '0.12em' }}>
          {chart.yLabel.toUpperCase()}
        </text>
      </svg>

      <p className="mt-auto pt-4 text-xs text-muted italic">{chart.note}</p>
    </Card>
  )
}

/* ---------------------------- Comparison table ---------------------------- */

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (typeof value === 'string')
    return <span className={cn('text-sm font-semibold', highlight ? 'text-navy' : 'text-muted')}>{value}</span>
  return value ? (
    <span
      className={cn(
        'mx-auto grid size-7 place-items-center rounded-full',
        highlight ? 'bg-primary text-white' : 'bg-primary/10 text-primary',
      )}
      aria-label="Yes"
    >
      <Check className="size-4" strokeWidth={3} />
    </span>
  ) : (
    <span className="mx-auto grid size-7 place-items-center rounded-full bg-navy/[0.05] text-muted/70" aria-label="No">
      <X className="size-4" strokeWidth={2.5} />
    </span>
  )
}

export function ComparisonTable() {
  const { table } = science
  return (
    <Card className="flex h-full flex-col p-6 sm:p-8" hover={false}>
      <h3 className="text-lg font-semibold">{table.title}</h3>
      <div className="-mx-6 mt-6 overflow-x-auto px-6 sm:-mx-8 sm:px-8">
        <table className="w-full min-w-[480px] border-separate border-spacing-0 text-left">
          <thead>
            <tr>
              <th className="w-[38%]" />
              {table.columns.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={cn(
                    'px-3 py-3.5 text-center text-[11px] font-bold tracking-[0.14em] uppercase',
                    i === 0 ? 'rounded-t-xl bg-navy text-white' : 'text-muted',
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, r) => {
              const last = r === table.rows.length - 1
              return (
                <tr key={row.label}>
                  <th scope="row" className="border-t border-navy/[0.07] py-4 pr-3 text-sm font-medium text-navy">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={cn(
                        'border-t border-navy/[0.07] px-3 py-4 text-center',
                        i === 0 && 'bg-sky/[0.12]',
                        i === 0 && last && 'rounded-b-xl',
                      )}
                    >
                      <Cell value={v} highlight={i === 0} />
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

/* -------------------------------- Section --------------------------------- */

export function Science() {
  return (
    <section id="science" className="scroll-mt-[72px] py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={science.eyebrow} title={science.title} italic={science.italic} breakItalic align="center">
            <p>{science.body}</p>
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <AlertnessChart />
          </Reveal>
          <Reveal delay={120}>
            <ComparisonTable />
          </Reveal>
        </div>

        <BenefitsStrip className="mt-6" />
      </Container>
    </section>
  )
}
