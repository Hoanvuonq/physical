export interface IHeader {
  label: string;
  href: string;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
}
