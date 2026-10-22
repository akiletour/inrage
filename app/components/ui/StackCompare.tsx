interface Layer {
  label: string
  detail?: string
  tone: 'same' | 'blocked' | 'new'
}

interface Stack {
  label: string
  layers: Layer[]
}

interface StackCompareProps {
  caption: string
  stacks: Stack[]
}

const layerClass = {
  same: 'border border-[#3a3a3a] bg-[#2c2c2c] text-gray-light',
  blocked:
    'border border-[#e8796d]/50 bg-[repeating-linear-gradient(135deg,rgb(192_57_43/18%)_0_8px,transparent_8px_16px)] text-white',
  new: 'bg-orange text-gray-darker',
}

const detailClass = {
  same: 'text-gray',
  blocked: 'text-[#e8796d]',
  new: 'text-gray-darker/75',
}

export default function StackCompare({ caption, stacks }: StackCompareProps) {
  return (
    <figure className="not-prose my-14">
      <div className="grid gap-10 md:grid-cols-2 md:gap-8">
        {stacks.map((stack) => (
          <div key={stack.label}>
            <p className="mb-4 font-mono text-sm tracking-tight text-gray">
              {stack.label}
            </p>
            <ol className="flex flex-col gap-1.5">
              {stack.layers.map((layer) => (
                <li
                  key={layer.label}
                  className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-md px-4 py-3.5 ${layerClass[layer.tone]}`}
                >
                  <span
                    className={`font-semibold ${
                      layer.tone === 'same' ? 'text-[15px]' : 'text-base'
                    }`}
                  >
                    {layer.label}
                  </span>
                  {layer.detail && (
                    <span
                      className={`font-mono text-[13px] ${detailClass[layer.tone]}`}
                    >
                      {layer.detail}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <figcaption className="mt-6 text-sm text-gray">{caption}</figcaption>
    </figure>
  )
}
