import Link from "next/link";

const Header = () => {
    return (
      <header className="bg-[#ffffff] py-4  pr-2">
        <div className="container mx-auto flex justify-between w-full items-center">
          {/* <div className="text-2xl">مرن فا</div> */}
          <nav className="text-white">
            <ul className="flex gap-4 ">
              <li>
                <Link
                  className="bg-green-600 w-32 h-12 flex justify-center items-center rounded-md"
                  href={"/"}
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  className="bg-green-600 w-32 h-12 flex justify-center items-center rounded-md"
                  href={"/blog"}
                >
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link
                  className="bg-green-600 w-32 h-12 flex justify-center items-center rounded-md"
                  href={"/movies"}
                >
                  فیلم ها
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}

export default Header;