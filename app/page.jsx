import Banner from "../components/banner";
import Image from "next/image";
import Link from "../components/banner";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto my-8">
        <div className="bg-zinc-200 p-4  flex flex-col items-center justify-center gap-8  rounded-lg border-x-4">
          {/* Home Lorem, ipsum dolor. */}
          <div>سلام</div>
          {/* <Image alt="alt" className="rounded-2xl" priority={true} width={200} height={200} src={"/image/18.Ticket-Dashboard.png"}/> */}
          {/* <Link target={"_blank"} className="bg-green-600 text-white px-4 py-1 rounded-md transition-all duration-300 hover:bg-green-700" href={"/movies"}>Movies</Link>  */}
          <Banner />
        </div>
      </div>
    </>
  );
};

export default HomePage;
