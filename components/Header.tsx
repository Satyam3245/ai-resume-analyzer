"use client"
import { Button } from "./ui/button"
import { Waypoints } from 'lucide-react';
import { LoaderPinwheel } from 'lucide-react';
import { useEffect, useState } from "react";
import { LogOut } from 'lucide-react';

export function Header(){
    
    return <header className="sticky top-0 w-full bg-black border-b border-white/7 backdrop-blur-xl z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <span className="text-white font-bold text-lg border-none rounded-xl p-1 bg-blue-700">✨</span>
          </div>
          <span className="text-xl font-bold text-white">Ai Resume Analyzer</span>
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
    
            <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center gap-2 border-border hover:bg-card text-white cursor-pointer"
            onClick={()=>{
                
            }}
          >
            <LoaderPinwheel className="w-4 h-4" />
            Google
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center gap-2 border-border hover:bg-card text-white cursor-pointer"
            onClick={()=>{
                
            }}
          >
            <Waypoints className="w-4 h-4" />
            GitHub
          </Button>

           <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center gap-2 border-border hover:bg-card text-white cursor-pointer"
            onClick={()=>{
            }}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </nav>
    </header>
}