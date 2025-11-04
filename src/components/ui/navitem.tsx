export interface NavbarItem {
  url: string;
  label: string;
  isActive?: boolean;
}

export default function NavItem({ url, label, isActive }: NavbarItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-base font-normal ${
        isActive ? 'text-snow' : 'text-gray hover:text-snow'
      }`}
    >
      {label}
    </a>
  );
}
