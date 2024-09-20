import { MdOutlineLocalHospital } from "react-icons/md";

const Footer = () => {
  return (
    <div className="md:mx-10 ">
      <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <div className="flex items-center mb-5">
            <MdOutlineLocalHospital className="text-primary text-4xl" />
            <p className="text-2xl font-bold text-primary">AppointDoc</p>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut fuga
            autem illo sapiente doloribus nobis, ipsa optio totam officia
            ratione magnam a voluptatibus iusto voluptate quam tempora
            consectetur veritatis nostrum.
          </p>
        </div>
        {/* Center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* Right section */}
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>+1-212-456-7890</li>
                <li>AppointDoc@gmail.com</li>
            </ul>
        </div>
      </div>

      {/* copywrite */}
      <div >
<hr/>
<p className="py-5 text-sm text-center text-gray-600">Copyright © 2024 AppointDoc - All Right Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
