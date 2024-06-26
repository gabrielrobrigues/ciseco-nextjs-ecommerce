import Logo from "@/shared/Logo/Logo";
import SocialsList1 from "@/shared/SocialsList1/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Getting started",
    menus: [
      { href: "/", label: "Release Notes" },
      { href: "/", label: "Upgrade Guide" },
      { href: "/", label: "Browser Support" },
      { href: "/", label: "Dark Mode" },
    ],
  },
  {
    id: "1",
    title: "Explore",
    menus: [
      { href: "/", label: "Prototyping" },
      { href: "/", label: "Design systems" },
      { href: "/", label: "Pricing" },
      { href: "/", label: "Security" },
    ],
  },
  {
    id: "2",
    title: "Resources",
    menus: [
      { href: "/", label: "Best practices" },
      { href: "/", label: "Support" },
      { href: "/", label: "Developers" },
      { href: "/", label: "Learn design" },
    ],
  },
  {
    id: "4",
    title: "Community",
    menus: [
      { href: "/", label: "Discussion Forums" },
      { href: "/", label: "Code of Conduct" },
      { href: "/", label: "Contributing" },
      { href: "/", label: "API Reference" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-10 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container">
        <div className="grid">
          © 2024 - Traços do próprio. Com amor, Gabs. ❤️
        </div>
      </div>
    </div>
  );
};

export default Footer;
