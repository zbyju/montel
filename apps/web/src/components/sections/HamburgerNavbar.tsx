import { elastic as Menu } from "react-burger-menu";
import type { ColorName } from "../../types/colors.types";
import type { Link } from "../../types/menu.types";

interface Props {
  bg: ColorName;
  links: Link[];
}

export function HamburgerNavbar({ links, bg }: Props) {
  const bgColor = `bg-${bg}-900`;
  const hoverBgColor = `hover:bg-${bg}-600`;
  const fillColor = `fill-${bg}-900`;
  const textColor = `text-${bg}-100`;
  const hoverTextColor = `hover:text-white`;
  return (
    <Menu
      burgerBarClassName={`${bgColor} ${hoverBgColor}`}
      crossClassName="bg-rose-600"
      menuClassName={`${bgColor} ${textColor}`}
      morphShapeClassName={`${bgColor} ${fillColor}`}
      itemClassName={`${bgColor} ${textColor} ${hoverTextColor} transition duration-300`}
      overlayClassName={bgColor}
    >
      {links.map((link) => (
        <a className={link.className} href={link.href} key={link.href}>
          {link.text}
        </a>
      ))}
    </Menu>
  );
}
