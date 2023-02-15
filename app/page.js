import Image from "next/image";
import { Inter } from "@next/font/google";
import TopCards from "./components/TopCards";
import BarChart from "./components/BarChart";
import RecentOrders from "./components/RecentOrders";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <TopCards />
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  );
}
