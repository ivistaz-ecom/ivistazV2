"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CustomErrorPage = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  return (
    <>
      <div className="bg-black min-h-screen text-white flex flex-col justify-center items-center px-4 text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Page 404</h1>
          <p className="text-lg mb-6">
            {domainName}
            {pathname} page you're looking for could not be found.
          </p>
          <Link href="/welcome">
            <p className="text-red-500 border-b border-red-500 inline-block cursor-pointer">
              Go back to home
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CustomErrorPage;
