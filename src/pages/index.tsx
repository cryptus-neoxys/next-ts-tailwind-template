import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js with{" "}
            <a href="https://fauna.com/" className="text-green-400">
              Tailwind
            </a>{" "}
            &
            <a href="" className="text-blue-500">
              {" "}
              TypeScript
            </a>
          </a>
        </h1>
      </main>
    </div>
  );
}
