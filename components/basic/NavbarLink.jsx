import Link from 'next/link';

export const NavbarLink = ({ href, tag }) => {
  return (
    <Link href={href}>
      <a className='text-white underline hover:text-blue-200'>
        {tag}
      </a>
    </Link>
  );
}