
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   p-24">
     
     <h1  className="font-semibold  text-2xl">Next JS</h1>
     <p>Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.</p>
     
     <h1 className="font-semibold mt-8 text-lg">Features</h1>
     <ul className="list-disc ms-4">
      <li>Routing</li>
      <li>Rendering</li>
      <li>Data Fetching</li>
      <li>Styling</li>
      <li>Optimizations</li>
      <li>Typescript</li>
     </ul>
    </main>
  );
}
