
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from "@/lib/theme-provider";

const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    children: [
      {
        title: "IEEE",
        href: "/about/ieee",
      },
      {
        title: "IEEE SOU SB",
        href: "/about/ieee-sou-sb",
      },
      {
        title: "IEEE SOU WIE SB AG",
        href: "/about/ieee-sou-wie-sb-ag",
      },
      {
        title: "IEEE SOU SPS SBC",
        href: "/about/ieee-sou-sps-sbc",
      },
      {
        title: "IEEE SOU CS SBC",
        href: "/about/ieee-sou-cs-sbc",
      },
      {
        title: "IEEE SOU SIGHT SBG",
        href: "/about/ieee-sou-sight-sbg",
      },
    ],
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Members",
    href: "/members",
  },
  {
    title: "Awards",
    href: "/awards",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 py-2 shadow-md backdrop-blur-sm"
          : "py-4 bg-white dark:bg-gray-900"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              {/* IMPORTANT: Replace this with dark mode logo when available */}
              {/* For dark mode: theme === "dark" ? "DARK_MODE_LOGO_URL" : "LIGHT_MODE_LOGO_URL" */}
              <img
                src="http://ieee.socet.edu.in/wp-content/uploads/2025/03/ieee_sou_sb_logo-removebg-preview.png"
                alt="IEEE SOU SB Logo"
                className="h-12 w-auto md:h-12 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-40 p-2">
                            {item.children.map((child) => (
                              <NavigationMenuLink asChild key={child.title}>
                                <Link
                                  to={child.href}
                                  className="block select-none rounded-md p-2 text-xs text-center leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{child.title}</div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.href || "#"}
                        className="block px-3 py-2 rounded-md text-sm font-medium hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2 ml-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-primary border-primary hover:bg-primary/10"
                asChild
              >
                <Link to="/join">Join IEEE</Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme} 
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-primary border-primary hover:bg-primary/10 mr-2"
              asChild
            >
              <Link to="/join">Join</Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="mr-2"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => (
            <React.Fragment key={item.title}>
              {item.children ? (
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm font-medium text-primary flex items-center justify-between">
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        to={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded-md text-xs font-medium hover:bg-secondary transition-colors"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href || "#"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-colors"
                >
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}
