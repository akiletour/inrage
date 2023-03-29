import Github from './socials/Github';
import LinkedIn from './socials/LinkedIn';
import Malt from './socials/Malt';
import Twitter from './socials/Twitter';

export default function Socials() {
  return (
    <div className="grid grid-flow-col gap-2 items-center justify-start">
      <a
        aria-label="Github inRage / Pascal GAULT"
        className="text-white transition hover:text-orange"
        href="https://github.com/Akiletour"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Github />
      </a>
      <a
        aria-label="Twitter Pascal GAULT"
        className="text-white transition hover:text-orange"
        href="https://twitter.com/akiletour"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Twitter />
      </a>
      <a
        aria-label="LinkedIn Pascal GAULT"
        className="text-white transition hover:text-orange"
        href="https://www.linkedin.com/in/akiletour/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <LinkedIn />
      </a>
      <a
        aria-label="Malt Pascal GAULT"
        className="text-white transition hover:text-orange"
        href="https://www.malt.fr/profile/pascalgault"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Malt />
      </a>
    </div>
  );
}
