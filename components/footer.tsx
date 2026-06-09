import { Separator } from "@/components/ui/separator"
import { Mail } from 'lucide-react'
export default function Footer(){
    return <footer className="bg-black border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-6 py-12">
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

      <div className="col-span-2 md:col-span-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
            <span className="text-white font-bold text-lg">✨</span>
          </div>

          <span className="text-lg font-bold text-white">
            Ai Resume Analyzer
          </span>
        </div>

        <p className="text-gray-400 text-sm">
          AI-powered resume analyzer for the modern web.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-white mb-4">
          Product
        </h4>

        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#how-it-works"
              className="text-gray-400 hover:text-white transition-colors"
            >
              How it works
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              API
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-white mb-4">
          Company
        </h4>

        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Careers
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-white mb-4">
          Legal
        </h4>

        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Security
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Compliance
            </a>
          </li>
        </ul>
      </div>
    </div>

    <Separator className="bg-gray-800 my-8" />

    <div className="flex flex-col md:flex-row items-center justify-between">
      <p className="text-gray-400 text-sm">
        © 2026 AI Resume Analyzer. All rights reserved.
      </p>

      <div className="flex items-center gap-6 mt-6 md:mt-0">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
        </a>

        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
        </a>

        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
        </a>

        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>

  </div>
</footer>
}