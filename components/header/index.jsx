import Link from "next/link";

const Header = () => {
    return (
      <header className="bg-[#ffffff] py-4"> 
        <nav className="text-white  container mx-auto">
          <ul className="flex gap-4 ">
            <li>
              <Link
                className="bg-green-600 w-32 h-12 flex justify-center item-center rounded-md"
                href={"/"}
              >
                خانه
              </Link>
            </li>
            <li>
              <Link
                className="bg-green-600 w-32 h-12 flex justify-center item-center rounded-md"
                href={"/blog"}
              >
                وبلاگ
              </Link>{" "}
              <li>
                <Link
                  className="bg-green-600 w-32 h-12 flex justify-center item-center rounded-md"
                  href={"/movies"}
                >
                  فیلم ها
                </Link>
              </li>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;