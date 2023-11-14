import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className=" rounded-lg shadow-purple-300 m-4 bg-zinc-900">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
            © {year}{" "}
            <Link href="http://www.google.com/" className="hover:underline">
              OxygenDev™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 dark:text-gray-400 sm:mt-0">
            <li>
              <Link
                href="/page/about"
                className="mr-4 hover:underline md:mr-6 "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/page/privacy"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/page/licensing"
                className="mr-4 hover:underline md:mr-6"
              >
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/page/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
