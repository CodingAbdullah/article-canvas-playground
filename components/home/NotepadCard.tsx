export default function NotepadCard() {
  return (
    <div className={"frosted p-6 rounded-xl scroll-animate group relative overflow-hidden"}>
      <div className="shimmer-effect w-16 h-16 rounded-full frosted-light flex items-center justify-center mb-6 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-kings-silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-center text-kings-white mb-4">Distraction-Free Writing</h3>
      <p className="text-kings-silver/80 text-center mt-4">
        Application is dedicated to allowing you to create the best content out there
      </p>
    </div>
  );
}