import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div
        className="bg-blue-bg px-16 pt-20 relative"
        style={{ height: "291mm", width: "100%" }}
      >
        <div className="h-[60px] flex justify-between items-center">
          <Image alt="" src="/Strike.png" height={40} width={200} />
          <p className="text-center text-white">{new Date().toDateString()}</p>
        </div>
        <div className="flex flex-col gap-5 text-white mt-40">
          <h3 className="text-2xl">Reporting POC</h3>
        </div>
      </div>
      <div className="flex flex-col gap-2 break-before-page">
        <h1 className="text-3xl">Index</h1>
        <a href="#section1">Section A</a>
        <a href="#section2">Section B</a>
      </div>
      <h1 id="section1" className="text-3xl  break-before-page">
        Section A
      </h1>
      <p className="mb-5">Section A content...</p>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>
            <img src="https://placehold.co/600x400" alt={""} />
          </div>
        ))}
      </div>
      <h1 id="section2" className="text-3xl break-before-page mb-3">
        Section B
      </h1>
      <p>Section B content...</p>
      <div className="flex flex-col gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>
            <img src="https://placehold.co/600x400" alt={""} />
          </div>
        ))}
      </div>
    </main>
  );
}
