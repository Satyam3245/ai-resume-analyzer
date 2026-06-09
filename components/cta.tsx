import { ArrowRight } from 'lucide-react'
export default function CTA(){
    return <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-black  border border-blue-500/20 rounded-2xl p-12 md:p-16 overflow-hidden">
        
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30" />
        </div>
  
        <div className="text-center space-y-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Ready to search smarter?
          </h2>
  
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of users discovering answers faster with AI Resume Analyzer.
            Start your free trial today, no credit card required.
          </p>
  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors w-full sm:w-auto">
              Start Free Trial  
              <ArrowRight className="w-5 h-5" />
            </button>
  
            <button className="px-6 py-3 border border-gray-700 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors w-full sm:w-auto">
              Learn More
            </button>
  
          </div>
        </div>
      </div>
    </div>
  </section>
}