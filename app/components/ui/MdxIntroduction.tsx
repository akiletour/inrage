import { ReactNode } from 'react'

const MdxIntroduction = ({ children }: { children: ReactNode }) => {
  return (
    <p className="mt-0 mb-10 text-[1.375rem] leading-normal tracking-[-0.01em] text-white md:text-2xl md:leading-[1.45]">
      {children}
    </p>
  )
}

export default MdxIntroduction
