import Link from "next/link";

function NavItem({ to, children, mobile = false, onClick }) {
  if (mobile) {
    return (
      <Link href={{pathname:to}} onClick={onClick}>
        <li>{children}</li>
      </Link>
    );
  }

  return (
    <Link href={{pathname:to}}>
      <li className="hover:underline duration-200 transition-all">
        {children}
      </li>
    </Link>
  );
}

export default NavItem;
