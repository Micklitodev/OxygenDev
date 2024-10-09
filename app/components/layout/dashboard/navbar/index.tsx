import Link from "next/link";

const DashboardNavbar = (): JSX.Element => {
  return (
    <>
      <aside className="w-64 bg-zinc-900 text-white p-6">
        <h1 className="text-2xl mb-1">Dashboard</h1>
        <hr className="mb-4 " />
        <nav>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            href="/page/dashboard"
          >
            Home
          </Link>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            href="/page/dashboard/profile"
          >
            Profile
          </Link>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            href="/page/dashboard/analytics"
          >
            Analytics
          </Link>
          <Link
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            href="/page/dashboard/settings"
          >
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default DashboardNavbar;
