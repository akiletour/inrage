import Image from 'next/image';
import Diagonal from './layouts/Diagonal';
import KeypointItem from './items/KeypointItem';

export default function Keypoints() {
  return (
    <div className="relative">
      <Diagonal
        className="h-10 sm:h-20 lg:h-auto"
        flipX
        flipY
        bgClass="fill-gray-dark"
        bgCorner="fill-orange"
      />
      <Image className="-z-10" src="/images/yohann-tilotti_bloody-sky.jpeg" layout="fill" alt="Yohann Tilotti - Bloody Sky" />
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-y-4 py-4">
        <KeypointItem />
        <KeypointItem />
        <KeypointItem />
        <KeypointItem />
      </div>
      <Diagonal
        className="h-10 sm:h-20 lg:h-auto"
        bgClass="fill-gray-darker"
        bgCorner="fill-orange"
      />
    </div>
  );
}
