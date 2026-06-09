import { features } from '@/lib/data'
import { Card } from '@/components/ui/card'

export function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Powerful Features
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-white">
            Everything you need for intelligent search and discovery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="bg-black border hover:border-blue-500 transition-all duration-300 hover:bg-black/50 p-6 group"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-violet-500 group-hover:bg-violet-700 transition-colors">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}