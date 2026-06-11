import Analyzer from "@/components/Analyzer"
import option from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
export default async function(){
  const session = await getServerSession(option);
  console.log(session?.user?.email)
  return <div>  
    {session? (
      <Analyzer/>
    ):(
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4">
          Restricted Page
        </h1>
        <p className="text-gray-300 mb-6">
          Please log in to access this page.
        </p>
        <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
        >
          Go to Home
        </Link>
      </div>
    )}
  
  
  </div>
}