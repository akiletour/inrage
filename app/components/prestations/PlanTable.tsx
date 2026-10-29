import { Fragment } from 'react'

import Glass from '@component/home/Glass'
import Reveal from '@component/home/Reveal'

export type Plan = { name: string; price: string }
export type PlanRow = {
  name: string
  excerpt: string
  values: Array<string | boolean>
}

function Value({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="font-medium text-white">Inclus</span>
    ) : (
      <span className="text-white/30">Non</span>
    )
  }
  return (
    <span className="home-num font-medium text-white">
      {value.split('|').map((part, i) => (
        <Fragment key={part}>
          {i > 0 && <br />}
          {part}
        </Fragment>
      ))}
    </span>
  )
}

export default function PlanTable({
  plans,
  rows,
  support,
}: {
  plans: Plan[]
  rows: PlanRow[]
  support: string
}) {
  return (
    <>
      <Reveal className="hidden md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Comparatif des forfaits de maintenance {support}
          </caption>
          <thead>
            <tr className="border-b border-white/10 align-bottom">
              <th scope="col" className="w-[40%] pb-6"></th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  scope="col"
                  className="px-4 pb-6 text-center"
                >
                  <span className="block text-2xl font-semibold tracking-tight text-white">
                    {plan.name}
                  </span>
                  <span className="home-num mt-1 block text-base font-medium text-(--home-orange-text)">
                    {plan.price}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((row) => (
              <tr key={row.name}>
                <th scope="row" className="py-5 pr-6 align-top font-normal">
                  <span className="block text-lg font-medium text-white">
                    {row.name}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-(--home-muted)">
                    {row.excerpt}
                  </span>
                </th>
                {row.values.map((value, i) => (
                  <td key={i} className="px-4 py-5 text-center align-top">
                    <Value value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <div className="grid gap-6 md:hidden">
        {plans.map((plan, p) => (
          <Reveal key={plan.name} i={p}>
            <Glass className="p-6">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {plan.name}
              </h3>
              <p className="home-num mt-1 text-base font-medium text-(--home-orange-text)">
                {plan.price}
              </p>
              <dl className="mt-5 divide-y divide-white/10">
                {rows.map((row) => {
                  const value = row.values[p]
                  if (value === false || value === undefined) return null
                  return (
                    <div
                      key={row.name}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <dt className="text-sm leading-6 text-white/85">
                        {row.name}
                      </dt>
                      <dd className="shrink-0 text-right text-sm">
                        <Value value={value} />
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </Glass>
          </Reveal>
        ))}
      </div>
    </>
  )
}
