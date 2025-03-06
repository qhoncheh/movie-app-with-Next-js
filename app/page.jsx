import Banner from "../components/banner";
import Image from "next/image";
import Link from "../components/banner";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto my-8">
        <div className="bg-zinc-200 p-4  flex flex-col item-center justify-center gap-8  rounded-lg border-x-4">
          {/* Home Lorem, ipsum dolor. */}
          <div>سلام</div>
          {/* <Image alt="alt" />
          <Link></Link> */}
          <Banner />
        </div>
      </div>
    </>
  );
};

export default HomePage;
