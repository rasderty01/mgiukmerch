import Link from "next/link";

const Footer = ({}) => {
  return (
    <footer className="relative ">
      <section
        className="container max-w-full px-4 sm:px-6 lg:px-8 xl:px-32 mx-auto py-12 flex-grow mt-8 mb-8"
        id="footer"
      >
        <div className="grid grid-cols-3 grid-rows-1 items-center justify-items-center gap-x-1 md:gap-8 h-full">
          <div className="md:order-1 md:mt-0 col-start-1 col-end-2 row-start-1 row-end-1 w-full">
            <p className="text-left text-xs leading-5 text-muted-foreground w-full">
              © 2023 MGiUK Merchandise Hub All rights reserved.
            </p>
          </div>
          <div className="text-center col-start-2 col-end-3 row-start-1 row-end-1">
            <div className="flex space-x-1 sm:space-x-2 items-center">
              <Link href="popsy.co" className="text-xs">
                Illustrations by{" "}
                <span className="text-xs text-muted-foreground leading-5 underline">
                  {" Popsy.co"}
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-self-end space-x-6 md:order-2 col-start-3 col-end-4 row-start-1 row-end-1 items-center"></div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
