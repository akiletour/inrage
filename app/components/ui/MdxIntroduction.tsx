import { ReactNode } from 'react'

const MdxIntroduction = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-0 mb-10 text-[1.375rem] leading-normal tracking-[-0.01em] text-white md:text-2xl md:leading-[1.45] [&>p]:my-0">
      {children}
    </div>
  )
}

export default MdxIntroduction
