import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full grid sm:grid-flow-col grid-flow-row grid-cols-3 bg-slate-300">
      <div className="sm:col-span-2 bg-yellow-600 text-white overflow-hidden"><Image src={"https://ripoti.net/newapp/assets/images/login.jpg"} width={920} height={920} itemType="cover"/></div>
      <div className="sm:col-span-1 py-24 px-4">
        <LoginForm/>
      </div>
    </div>
  );
}
