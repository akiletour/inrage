import Image from 'next/image';
import PropTypes from 'prop-types';

export default function ExperienceItem({
  logo, title, company, year, excerpt,
}) {
  return (
    <div className="grid grid-cols-[250px_1fr] items-start justify-start">
      <div className="flex justify-center row-span-4">
        <Image src={logo} alt={company} />
      </div>
      <div className="text-white text-2xl font-medium">{title}</div>
      <div className="uppercase text-white">{company}</div>
      <div>{year}</div>
      <p className="mt-2 max-w-2xl leading-5">{excerpt}</p>
    </div>
  );
}

ExperienceItem.propTypes = {
  company: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  logo: PropTypes.oneOfType([PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
