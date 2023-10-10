import { Link } from "react-router-dom";
const PageOne = () => {
  return (
    <div class="flex flex-col min-h-full justify-center align items-center mt-10">
      
        <div class="underline decoration-sky-500 text-3xl  justify-items-center ">
          Student Info
        </div>

        <Link to="bot">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mr-4 mt-10">
            Enroll Now!
          </button>
        </Link>
      
    </div>
  );
};

export default PageOne;
