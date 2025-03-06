import Link from "next/link";

const page = () => {
    return (
       <div>
        <div>
            Blog
        </div>
        <Link
          className="bg-green-600 text-white px-4 py-1 rounded-md transition-all duration-300 hover:bg-green-700"
          href={"/"}
        >
          Main
        </Link>
       </div>
        
    );
}

export default page;




