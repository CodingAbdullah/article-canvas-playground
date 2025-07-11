// Footer custom component
export default function Footer() {
    return (
        <footer className="py-12 px-4 md:px-6 border-t border-kings-silver/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 rounded-full frosted-light flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-kings-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                        <span className="text-kings-white font-semibold">ArticleCanvas</span>
                    </div>
                    <div className="text-kings-silver/60 text-sm">
                        © {new Date().getFullYear()} ArticleCanvas. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}