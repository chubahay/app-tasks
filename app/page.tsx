'use client'

import Tasks  from "../components/Tasks";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="p-10 text-5xl">Tasks ✅</h1>
      <Tasks />
    </main>
  );
}

export default Home;