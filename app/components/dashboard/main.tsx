const DashboardMain = (): JSX.Element => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Welcome back!</h1>
      <p className="mt-2 mb-10 ml-1 text-gray-100">
        Here is what has been happening since your last visit.
      </p>

      <div className="grid gap-6 mt-6 grid-cols-2">
        <div className="p-6 bbg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500">
          <h2 className="text-xl font-semibold">New Customers</h2>
          <p className="mt-2 text-gray-400">
            Looks like you have some new customers since your last visit.
          </p>
        </div>

        <div className="p-6 bg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="mt-2 text-gray-400">
            Your revenue has increased since your last visit, keep up the good
            work!
          </p>
        </div>
        <div className="p-6 bbg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500">
          <h2 className="text-xl font-semibold">Sales</h2>
          <p className="mt-2 text-gray-400">
            {" "}
            Your sales have a better conversion rate since your last visit, keep
            up the good work!
          </p>
        </div>

        <div className="p-6 bg-zinc-850 shadow-lg rounded-lg justify-between border border-purple-500">
          <h2 className="text-xl font-semibold">Retention</h2>
          <p className="mt-2 text-gray-400">
            Your retention rate has increased since your last visit, keep up the
            good work!
          </p>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
