export interface NavbarItem {
  url: string;
  label: string;
  isActive?: boolean;
}

export default function NavItem({ url, label, isActive }: NavbarItem) {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      className={`text-base font-normal ${
        isActive
          ? 'text-snow'
          : 'text-gray hover:text-snow active:text-snow transition-all'
      }`}
    >
      {label}
    </a>
  );
}
