import { PhoneOutgoing, Shirt, TrendingUp, Truck } from "lucide-react";
import Image from "next/image";

const Sections = ({}) => {
  return (
    <>
      <section
        id="home"
        className="px-4 sm:px-6 lg:px-8 container max-w-full xl:px-32 mx-auto pt-24 pb-4 relative "
      >
        <div className="lg:flex lg:justify-between gap-1 mb-4 lg:mb-0 sm:mb-4">
          <div className="w-full lg:w-7/12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-foreground">
              MGiUK Merchandise Hub
            </h1>
            <div className="text-xl lg:text-2xl mt-6 font-light text-muted-foreground">
              Your go-to destination for trendy and quality merchandise inspired
              by popular culture, trends, and memes.
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <a href="#">
                    <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full sm:w-auto">
                      <span className="text-md font-semibold">
                        Get early access
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:block mt-20 lg:mt-0 relative">
            {" "}
            <div className="text-primary flex items-center justify-center">
              <Image
                src="online-shopping.svg"
                width={500}
                height={500}
                alt={""}
                className="bg-transparent"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="container max-w-full mx-auto py-12 flex-grow relative"
        id="features"
      >
        <div className="mt-12 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center">
          <div className="hidden lg:block mt-10 mx-4 lg:mt-0 order-first lg:order-first">
            <div className="text-primary flex items-center justify-center">
              <Image
                src="woman-tourist.svg"
                width={500}
                height={500}
                alt={""}
                className="bg-transparent"
              />
            </div>
          </div>
          <div className="relative">
            <h1 className="text-foreground text-2xl leading-8 font-extrabold tracking-tight sm:text-3xl sm:leading-9">
              Why Choose Us
            </h1>
            <p className="text-foreground mt-3 text-lg leading-7">
              We offer the best merchandise for every trend and meme!
            </p>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-background text-foreground">
                      <TrendingUp className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="ml-4 w-full">
                    <h2 className="text-lg leading-6 font-medium text-foreground">
                      Trendy Designs
                    </h2>
                    <p className="mt-2 text-foreground leading-6 ">
                      Our merchandise is always up-to-date with the latest
                      trends and designs, ensuring you stay stylish.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-background text-foreground">
                      <Shirt className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="ml-4 w-full">
                    <h2 className="text-lg leading-6 font-medium text-foreground">
                      Quality Materials
                    </h2>
                    <p className="mt-2 leading-6 text-foreground">
                      We use premium materials to ensure the durability and
                      comfort of our merchandise.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:hidden mt-20 mx-4 lg:mt-0 order-first lg:order-first">
            <div className="text-primary flex items-center justify-center">
              <Image
                src="woman-tourist.svg"
                width={500}
                height={500}
                alt={""}
                className="bg-transparent"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="container max-w-full mx-auto py-12 flex-grow relative"
        id="overview"
      >
        <div className="mt-12 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center">
          <div className="hidden lg:block mt-10 mx-4 lg:mt-0 order-first lg:order-first">
            <div className="text-primary flex items-center justify-center">
              <Image
                src="package-delivery.svg"
                width={500}
                height={500}
                alt={""}
                className="bg-transparent"
              />
            </div>
          </div>
          <div className="relative">
            <h1 className="text-foreground text-2xl leading-8 font-extrabold tracking-tight sm:text-3xl sm:leading-9">
              Our Commitment
            </h1>
            <p className="text-foreground mt-3 text-lg leading-7">
              We are dedicated to providing you with the best merchandise
              experience.
            </p>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-background text-foreground">
                      <Truck className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="ml-4 w-full">
                    <h2 className="text-lg leading-6 font-medium text-foreground">
                      Fast Shipping
                    </h2>
                    <p className="mt-2 text-foreground leading-6 ">
                      {
                        "We understand the excitement of receiving your merchandise, that's why we offer fast and reliable shipping."
                      }
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-background text-foreground">
                      <PhoneOutgoing className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="ml-4 w-full">
                    <h2 className="text-lg leading-6 font-medium text-foreground">
                      Exceptional Customer Support
                    </h2>
                    <p className="mt-2 text-foreground leading-6 ">
                      Our customer support team is available 24/7 to assist you
                      with any queries or concerns you may have.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:hidden mt-20 mx-4 lg:mt-0 order-first lg:order-first">
            <div className="text-primary flex items-center justify-center">
              <Image
                src="package-delivery.svg"
                width={500}
                height={500}
                alt={""}
                className="bg-transparent"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
