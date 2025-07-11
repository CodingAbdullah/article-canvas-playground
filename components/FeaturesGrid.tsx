import features from "../app/utils/constants/FeaturesList";
import { Check } from "lucide-react";

// Features Grid custom component
export default function FeaturesGrid(){
    return (
      <section className="py-16 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {
              features.map((feature, index) => (
                <div 
                  key={index}
                  className="scroll-animate frosted p-8 rounded-2xl group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div> 
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="shimmer-effect w-14 h-14 rounded-xl frosted-light flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-7 h-7 text-kings-silver" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-kings-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-kings-silver/80 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>      
                    <div className="grid grid-cols-2 gap-3">
                      {
                        feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-kings-silver/90 text-sm">{benefit}</span>
                          </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kings-silver/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    )
}