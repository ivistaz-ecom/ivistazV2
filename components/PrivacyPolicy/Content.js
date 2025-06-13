import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <>
      <div className="pt-5">
        <div className="bg-white lg:p-12 rounded-2xl px-5 p-5">
          <h2 className="text-3xl lg:text-[56px] text-[#ed2225] font-monument-bold">
            Solutions
          </h2>
          <div className="py-5">
            <h2 className="text-xl lg:text-[28px] text-[#ed2225] font-monument-bold">
              We are committed to safeguarding your privacy
            </h2>
            <p className="font-monument-light lg:text-lg py-2">
              We collect the minimum amount of personal information that is
              necessary to provide you with satisfactory services. This policy
              outlines how your data is collected and used. Your use of this
              website gives us the right to collect that information.
            </p>

            <h2 className="text-xl lg:text-[28px] text-[#ed2225] font-monument-bold pt-4">
              Collected Data
            </h2>
            <p className="font-monument-light lg:text-lg py-2">
              We may collect any or all of the information that you provide,
              including your name, address, telephone number, and email address,
              along with data about your use of the website. Other information
              necessary to process a request may also be collected as indicated
              on the website.
            </p>

            <h2 className="text-xl lg:text-[28px] text-[#ed2225] font-monument-bold pt-4">
              Use of Information
            </h2>
            <p className="font-monument-light lg:text-lg py-2">
              We use the information collected primarily to process the task for
              which you visited the website. All reasonable precautions are
              taken to prevent unauthorised access to this information.
            </p>

            <h2 className="text-xl lg:text-[28px] text-[#ed2225] font-monument-bold pt-4">
              Cookies Policy
            </h2>
            <p className="font-monument-light lg:text-lg py-2">
              Your internet browser has the in-built facility for storing small
              files called “cookies” that hold information allowing a website to
              recognise your account. Our website takes advantage of this
              facility to enhance your experience. You can choose to reject
              cookies, however, this might affect certain functionality on the
              website.
            </p>

            <h2 className="text-xl lg:text-[28px] text-[#ed2225] font-monument-bold pt-4">
              Disclosure of Information
            </h2>
            <p className="font-monument-light lg:text-lg pt-2">
              We do not disclose any personal information obtained from this
              website to third parties unless we are permitted to do so. We may
              use the information to keep in contact with you and inform you of
              developments associated with us. If at any time in the future, we
              should wish to disclose information collected on this website to
              any third party, it would only be with your knowledge and consent.
            </p>

            <p className="font-monument-light lg:text-lg pt-4">
              We may from time to time provide information of a general nature
              such as the number of individuals visiting our website or
              completing a registration form to third parties, but any personal
              information that could identify those individuals will be
              withheld.
            </p>
            <p className="font-monument-light lg:text-lg pt-4">
              Under certain circumstances, we may disclose your personal data if
              required to do so by law or in response to valid requests by
              public authorities (e.g. a court or a government agency).
            </p>
            <h2 className="text-xl lg:text-[28px] text-[#ed2225] font-monument-bold pt-4">
              Policy Changes
            </h2>
            <p className="font-monument-light lg:text-lg pt-2">
              Any changes to our Privacy Policy will be updated here. We will
              take reasonable steps to draw your attention to any changes in our
              policy. However, we suggest that you read this document each time
              you use the website to ensure that it still meets with your
              approval.
            </p>
            <h2 className="text-xl lg:text-[28px] text-[#ed2225] font-monument-bold pt-4">
              Contact Us
            </h2>
            <p className="font-monument-light lg:text-lg pt-2">
              If you have any queries regarding our Privacy Policy, or if you
              want to know what information we have collected about you, please
              email us at <Link href="mailto:reach@ivistaz.com." className="text-[#ed2225]">reach@ivistaz.com.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
