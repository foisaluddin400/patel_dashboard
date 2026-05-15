import { RiUserForbidLine } from "react-icons/ri";
import ActivityStatisticsChart from "./ActivityStatisticsChart";
import BookingGrowth from "./BookingGrowth";
import ShopRegistration from "./ShopRegister";
import UserGrowthChart from "./UserGrowthChart";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { VscNote } from "react-icons/vsc";
import { PiMoneyLight } from "react-icons/pi";
const Dashboard = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-4 gap-4">
        <div className=" gap-4 items-center  p-6 rounded-2xl bg-[#181818] border border-[#FFFFFF14]">
          <div className="bg-[#7CFF3A12] border border-[#7CFF3A25]  rounded-2xl w-[45px] h-[45px] flex justify-center items-center text-2xl">
            <HiOutlineUserGroup className="text-[#7CFF3A]" />
          </div>
          <div>
            <h1 className="font-semibold text-2xl text-white">1,100</h1>
            <h1 className="text-zinc-500"> Total User</h1>
          </div>
        </div>
          <div className=" gap-4 items-center  p-6 rounded-2xl bg-[#181818] border border-[#FFFFFF14]">
          <div className="bg-[#7CFF3A12] border border-[#7CFF3A25] w-[45px] rounded-2xl h-[45px] flex justify-center items-center text-2xl">
            <HiOutlineUserGroup className="text-[#7CFF3A]" />
          </div>
          <div>
            <h1 className="font-semibold text-2xl text-white">1,100</h1>
            <h1 className="text-zinc-500"> Total User</h1>
          </div>
        </div>
          <div className=" gap-4 items-center  p-6 rounded-2xl bg-[#181818] border border-[#FFFFFF14]">
          <div className="bg-[#7CFF3A12] border border-[#7CFF3A25] w-[45px] rounded-2xl h-[45px] flex justify-center items-center text-2xl">
            <HiOutlineUserGroup className="text-[#7CFF3A]" />
          </div>
          <div>
            <h1 className="font-semibold text-2xl text-white">1,100</h1>
            <h1 className="text-zinc-500"> Total User</h1>
          </div>
        </div>
          <div className=" gap-4 items-center  p-6 rounded-2xl bg-[#181818] border border-[#FFFFFF14]">
          <div className="bg-[#7CFF3A12] border border-[#7CFF3A25] w-[45px] rounded-2xl h-[45px] flex justify-center items-center text-2xl">
            <HiOutlineUserGroup className="text-[#7CFF3A]" />
          </div>
          <div>
            <h1 className="font-semibold text-2xl text-white">1,100</h1>
            <h1 className="text-zinc-500"> Total User</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 ">
         <div className=" rounded-2xl bg-[#181818] border border-[#FFFFFF14] ">
          {/* <ActivityStatisticsChart /> */}
          <BookingGrowth></BookingGrowth>
        </div>
        <div className="w-full h-full rounded-2xl bg-[#181818] border border-[#FFFFFF14]">
          <UserGrowthChart />
        </div>
       
      </div>

      <div className="w-full rounded-2xl bg-[#181818] border border-[#FFFFFF14] mt-4">
        <ShopRegistration></ShopRegistration>
      </div>
    </div>
  );
};

export default Dashboard;
