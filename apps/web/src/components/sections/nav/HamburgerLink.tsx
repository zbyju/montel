import type { ColorName } from "../../../types/colors.types";
import type { Link as LinkType } from "../../../types/menu.types";

interface Props {
  link: LinkType;
  bg: ColorName;
}

export default function HamburgerLink({ link: l, bg }: Props) {

  return (<>{
    'href' in l ? (
      <a className={[l.className, `text-white pl-2 border-l-2 border-${bg}-400 hover:border-${bg}-50 transition duration-300`].join(" ")} href={l.href} key={l.href}>
        {l.text}
      </a>
    ) : (
      <div className={`flex flex-col`}>
        <span className={[l.className, `pl-2 text-sm border-l-2 border-${bg}-400 text-${bg}-200`].join(" ")}>{l.text}</span>
        {
          l.links.map(s =>
            <a className={[s.className, `py-1 text-${bg}-100 hover:text-white pl-4 border-l-2 border-${bg}-400 hover:border-white transition duration-300`].join(" ")} href={s.href} key={s.href}>
              {s.text}
            </a>
          )
        }
      </div>
    )
  }</>)
}
