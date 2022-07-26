import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuList } from "./data-menu";
import styles from "./header.module.css";
type Props = {};

const Header = (props: Props) => {
    const router = useRouter();
    console.log(router.pathname);

    return (
        <>
            <ul className="menu">
                {MenuList.map((menu, index) => (
                    <li key={index}>
                        <Link href={menu.path}>
                            <a
                                className={clsx({
                                    active: router.pathname === menu.path,
                                })}
                            >
                                {menu.label}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Header;
