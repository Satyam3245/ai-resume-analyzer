import { Sparkles, ArrowRight } from 'lucide-react'
export default function Hero(){

    return <section className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden text-white">
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-black/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-black/10 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        </div>
        <div className='flex flex-col items-center'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/5 border border-blue-800'>
                <Sparkles className='w-4 h-4 text-white'/>
                <span className='text-sm font-medium text-blue-700'>
                    Introducing Ai Resume Analyzer 
                </span>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight text-center'>
                Analyze Your Resume by 
                <span className='block bg-gradient-to-r from-blue-700 via-white to-blue-700 bg-clip-text text-transparent tracking-wide'>
                    Advanced Intelligence 
                </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto text-balance leading-relaxed text-center">
                Experience the next generation Resume Analysis .Get instant, accurate answers with deep insights of Resume and Jobs that are powered by cutting-edge artificial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
                <button
                className="flex items-center bg-blue-700 hover:bg-blue-500 gap-2 w-full sm:w-auto text-black py-2 px-3 rounded-lg"
                >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
                </button>

                <button
                className="border-black/20 hover:bg-black/5 w-full sm:w-auto"
                >
                Watch Demo
                </button>
            </div>

            <div className="pt-8 border-t border-border border-gray-800 flex flex-col items-center justify-center">
                <p className="text-sm text-gray-400 mb-4">Powered by innovative teams</p>
                <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                    <div className="text-gray-400 font-semibold">OpenAI</div>
                    <div className="text-gray-400 font-semibold">Google</div>
                    <div className="text-gray-400 font-semibold">Anthropic</div>
                    <div className="text-gray-400 font-semibold">Meta</div>
                </div>
            </div>

        </div>
    </section>
}