import UseCaseList from "@/app/utils/constants/UseCasesList";

// Use Cases Section custom component
export default function UseCasesSection() {
    return (
        <section className="py-16 px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                        Perfect for Every Creator
                    </h2>
                    <p className="text-kings-silver/80 max-w-2xl mx-auto">
                        Whether you're a blogger, technical writer, or content creator, ArticleCanvas adapts to your workflow.
                    </p>
                </div>      
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    { UseCaseList.map((useCase, index) => (
                        <div key={index} className="frosted p-6 rounded-xl scroll-animate text-center group hover:scale-105 transition-transform duration-300">
                            <useCase.icon className="w-10 h-10 text-kings-silver mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-kings-white mb-2">{useCase.title}</h3>
                            <p className="text-kings-silver/80 text-sm">{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>    
    )
}