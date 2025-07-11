import NotepadCard from "@/components/NotepadCard";

// Features section of the home page
export default function FeaturesSection() {
    return (
      <section className="py-24 px-4 md:px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-kings-black/90 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 scroll-animate">
                <span className="px-4 py-1.5 rounded-full text-sm font-medium text-kings-silver/90 border border-kings-silver/20">
                    Why Choose ArticleCanvas
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 text-kings-white">
                    A Canvas That Gets Out of Your Way
                </h2>
                <p className="text-kings-silver/80 mt-4 max-w-2xl mx-auto">
                    Crafted with care to provide the perfect balance of simplicity and functionality for writers who appreciate quality.
                </p>
            </div>   
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <NotepadCard />  
              <div className="frosted p-6 rounded-xl scroll-animate group">
                <div className="shimmer-effect w-16 h-16 rounded-full frosted-light flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-kings-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center text-kings-white">Beautiful UI</h3>
                <p className="text-kings-silver/80 text-center mt-4">
                  Carefully crafted UI makes long-form writing and reading a pleasure.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kings-silver/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="frosted p-6 rounded-xl scroll-animate group">
                <div className="shimmer-effect w-16 h-16 rounded-full frosted-light flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-kings-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center text-kings-white">Automatic Saving</h3>
                <p className="text-kings-silver/80 text-center mt-4">
                  Never lose your work with seamless automatic saving to keep your ideas safe.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kings-silver/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
      </section>
    )
}