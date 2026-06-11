"use client"
import { Button } from "./ui/button"
import { Waypoints } from 'lucide-react';
import { LoaderPinwheel } from 'lucide-react';
import { useRouter } from 'next/navigation'
import { signIn ,signOut  } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from 'next/link'
export function Header(){
    const {data:session, status} = useSession();
    const router = useRouter();

    return <header className="sticky top-0 w-full bg-black border-b border-white/7 backdrop-blur-xl z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <span className="text-white font-bold text-lg border-none rounded-xl p-1 bg-blue-700">✨</span>
          </div>
          <Link href="/" className="text-xl font-bold text-white">Ai Resume Analyzer</Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white hover:text-blue-700 text-sm">
            Features
          </a>
          <a href="#how-it-works" className="text-white hover:text-blue-700 text-sm">
            How it works
          </a>
          <a href="#pricing" className="text-white hover:text-blue-700 text-sm">
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-3">
            {session?(
              <>
                <Button variant="header" size="sm" onClick={()=>{
                    signOut();
                }}>Logout</Button>
                <Button variant="header" size="sm" onClick={()=>{
                  router.push('/analyzer');
                }}>Analyzer</Button>
              </>
            ):<>
              <Button variant="header" size="sm" onClick={()=>{
                  signIn("google")
                }}>
                  <LoaderPinwheel className="w-4 h-4" />
                  Google
                </Button>
              <Button variant="header" size="sm" onClick={()=>{
                  signIn("github")
                }}>
                <Waypoints className="w-4 h-4" />
                  GitHub
              </Button>
            </>}
        </div>
      </nav>
    </header>
}