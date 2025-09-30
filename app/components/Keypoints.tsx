import Image from 'next/image'

import Diagonal from '@component/Diagonal'
import KeypointItem from '@component/items/KeypointItem'

import AchieveIcon from './icons/AchieveIcon'
import CupIcon from './icons/CupIcon'
import LeafHeartIcon from './icons/LeafHeartIcon'
import ThumbIcon from './icons/ThumbIcon'

export default function Keypoints() {
  return (
    <div className="relative">
      <Diagonal
        className="h-20 sm:h-40 lg:h-auto"
        flipX
        flipY
        bgClass="fill-gray-dark"
        bgCorner="fill-orange"
      />
      <Image
        className="-z-10"
        src="/images/yohann-tilotti_bloody-sky.jpeg"
        alt="Yohann Tilotti - Bloody Sky"
        fill
        sizes="100vw"
      />
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-y-8 py-8">
        <KeypointItem
          icon={<CupIcon className="h-6 md:h-10" />}
          value="2356"
          label="tasses à café"
        />
        <KeypointItem
          icon={<ThumbIcon className="h-6 md:h-10" />}
          value="352"
          label="projets"
        />
        <KeypointItem
          icon={<AchieveIcon className="h-6 md:h-10" />}
          value="15 années"
          label="d'expérience"
        />
        <KeypointItem
          icon={<LeafHeartIcon className="h-6 md:h-10" />}
          value="150+"
          label="idées à développer"
        />
      </div>
      <Diagonal
        className="h-20 sm:h-40 lg:h-auto"
        bgClass="fill-gray-darker"
        bgCorner="fill-orange"
      />
    </div>
  )
}
