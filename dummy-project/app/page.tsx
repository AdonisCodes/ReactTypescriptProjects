import './globals.css'
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className={'grid grid-cols-12 gap-6 my-14 lg:px-48 mt-[-0px] sm:p-10 md:px-32'}>
        <div className={'lg:col-span-3 bg-white rounded-2xl sm:col-span-12'}><Sidebar /></div>
        <div className={'lg:col-span-9 bg-white rounded-2xl sm:col-span-12 overflow-hidden'}><Navbar /></div>
    </div>
  )
}
