import LoginForm from "@/components/Forms/Login";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[90vh] w-[90%] grid sm:grid-flow-col gap-4 grid-flow-row grid-cols-2 bg-white rounded-2xl p-4 shadow-sm">
     <div className="col-span-1 bg-yellow-600 rounded-2xl">
      <h1>Welcome to Tesfa</h1>
     </div>
     <div className="col-span-1">
      <form>
        <Button>Login</Button>
      </form>
     </div>
    </div>
  );
}
