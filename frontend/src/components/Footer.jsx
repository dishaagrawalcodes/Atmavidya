import React from "react";

const Footer = () => {
  return (
    <>
    

<footer class="w-full p-4 mt-10 md:flex md:items-center md:justify-between md:p-6 bg-gray-800 ">
    <span class="text-sm text-gray-300 sm:text-center ">© 2023 <a href="#" class="hover:underline">RecursiveMinds™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

    </>
  );
};

export default Footer;
