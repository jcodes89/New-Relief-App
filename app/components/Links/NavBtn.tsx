
import Link from "next/link"

export function NavBtn(props: any) {
    return (
        <Link aria-details={props.details} className='max-[639px]:hidden btn m-0 mx-2 bg-yellow-300 hover:bg-sky-950 hover:scale-110 hover:text-yellow-300 hover:border-yellow-300 text-sky-950 ' href={props.href}>{props.link}</Link>
    )
}