import Link from 'next/link';

export const NavbarBurgerLink = ({ href, tag }) => {
  return (
    <Link href={href}>
      <a className='text-black hover:text-blue-900'>
        {tag}
      </a>
    </Link>
  );
}