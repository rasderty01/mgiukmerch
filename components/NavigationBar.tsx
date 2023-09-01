"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";

const NavigationBar = ({}) => {
  return (
    <header className="bg-secondary text-foreground relative">
      <nav className="max-w-full px-4 sm:px-6 lg:px-8 xl:px-32 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 items-stretch py-5 border-b border-primary lg:border-none">
          <div className="flex items-center justify start font-medium text-2xl">
            MGiUK Merchandise Hub
          </div>
          <div className="md:flex hidden justify-center items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="#home" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#features" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Features
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#overview" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Overview
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex md:ml-auto items-center justify-end">
            <Button
              size={"default"}
              variant={"default"}
              className="w-20 rouned-xl"
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="md:hidden flex p-2 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#home" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#features" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()}`}
                  >
                    Features
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#overview" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Overview
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
