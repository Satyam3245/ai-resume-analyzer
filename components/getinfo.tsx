
import { Card } from "@/components/ui/card";
import { steps } from "@/lib/data";

export default function GetInfo() {
  return (
    <section id="how-it-works" className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-16 space-y-4 text-white">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        How It Works
      </h2>

      <p className="text-lg text-white max-w-2xl mx-auto">
        Three simple steps to find answers faster
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div key={index} className="relative">
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-20 left-[50%] w-[calc(100%-3rem)] h-[2px] bg-black/20" />
            )}

            <Card className="p-8 relative z-10 ">
              <div className="flex items-start gap-4 bg-black p-2">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-700  flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-black" />
                  </div>

                  <div className="text-2xl font-bold text-blue-700 mb-4">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed text-white">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  </div>
</section>
  );
}