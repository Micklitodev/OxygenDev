const SettingsComponent = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="shadow-md rounded-lg p-6 w-96">
          <ul>
            <li className="mb-2  py-3 border rounded-md ">
              <a
                href="/update-profile"
                className="text-blue-500 hover:text-blue-700 hover:underline px-2"
              >
                Update Profile Info{" "}
                <p className="inline float-right px-2 text-white"> {" > "} </p>
              </a>
            </li>
            <li className="mb-2  py-3  border rounded-md ">
              <a
                href="/manage-usage"
                className="text-blue-500 hover:text-blue-700 hover:underline px-2"
              >
                Manage Usage{" "}
                <p className="inline float-right text-white px-2 "> {" > "} </p>
              </a>
            </li>
            <li className="mb-2 py-3 border rounded-md ">
              <a
                href="/faqs"
                className="text-blue-500 hover:text-blue-700 hover:underline px-2"
              >
                FAQs
                <p className="inline float-right px-2 text-white"> {" > "} </p>
              </a>
            </li>
            <li className="mb-2  py-3  border rounded-md ">
              <a
                href="/manage-usage"
                className="text-blue-500 hover:text-blue-700 hover:underline px-2"
              >
                Manage Usage{" "}
                <p className="inline float-right text-white px-2 "> {" > "} </p>
              </a>
            </li>
            <li className="mb-2  py-3  border rounded-md ">
              <a
                href="/manage-usage"
                className="text-blue-500 hover:text-blue-700 hover:underline px-2"
              >
                Manage Usage{" "}
                <p className="inline float-right text-white px-2 "> {" > "} </p>
              </a>
            </li>
            <li className="mb-2  py-3  border rounded-md ">
              <a
                href="/manage-usage"
                className="text-blue-500 hover:text-blue-700 hover:underline px-2"
              >
                Manage Usage{" "}
                <p className="inline float-right text-white px-2 "> {" > "} </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SettingsComponent;
