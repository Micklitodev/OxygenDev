import Link from "next/link"

export default function DashboardMain() {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 bg-zinc-900 text-white p-6">
        <h1 className="text-2xl mb-1">Dashboard</h1>
        <hr className="mb-4 "/> 
        <nav>
          <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="/page/dashboard">
            Home
          </Link>
          <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="/page/dashboard/profile">
            Profile
          </Link>
          <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="/page/dashboard/analytics">
            Analytics
          </Link>
          <Link className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="/page/dashboard/settings">
            Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 bg-dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white p-6">
        <h1 className="text-3xl font-semibold">Welcome back!</h1>
        <p className="mt-2 mb-10 ml-1 text-gray-100">Here's what's been happening since your last visit.</p>
        
        <div className="grid gap-6 mt-6 grid-cols-2">
          <div className="p-6 bbg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500">
            <h2 className="text-xl font-semibold">New Customers</h2>
            <p className="mt-2 text-gray-600">Looks like you have some new customers since your last visit.</p>
          </div>

          <div className="p-6 bg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500">
            <h2 className="text-xl font-semibold">Revenue</h2>
            <p className="mt-2 text-gray-600">
              Your revenue has increased since your last visit, keep up the good work!
            </p>
          </div>
          <div className="p-6 bbg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500">
            <h2 className="text-xl font-semibold">Sales</h2>
            <p className="mt-2 text-gray-600"> Your sales have a better conversion rate since your last visit, keep up the good work!</p>
          </div>

          <div className="p-6 bg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500">
            <h2 className="text-xl font-semibold">Retention</h2>
            <p className="mt-2 text-gray-600">
              Your retention rate has increased since your last visit, keep up the good work!
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}