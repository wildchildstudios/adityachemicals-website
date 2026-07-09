export interface NavItem {
  name: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  items: NavItem[];
}

export const headerNavItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Certificates", href: "/certificates" },
  { name: "Events", href: "/events" },
  { name: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  company: {
    title: "Our Company",
    items: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Products", href: "/products" },
      { name: "Certificates", href: "/certificates" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  products: {
    title: "Our Products",
    items: [
      { name: "Amino Acids and Derivatives", href: "/product-category/amino-acids-derivatives" },
      { name: "Chelated Minerals", href: "/product-category/minerals" },
      { name: "Vitamins & derivatives", href: "/product-category/vitamins-derivatives" },
      { name: "Excipients", href: "/product-category/excipients" },
    ],
  },
  manufacturingPlant: {
    title: "Manufacturing Plant",
    address: "24-25, Ajanta Industrial Estate, At. Vasna - Iyava, Tal. Sanand, Dist.: Ahmedabad - 382110, Gujarat, INDIA",
  },
  usaWarehouse: {
    title: "USA Warehouse",
    address: "6750 East Roger Circle, Boca Raton, FL 33487, USA",
  },
  contact: {
    title: "Contact Us",
    phone: "079 2685 4545",
    email: "info@adityachemicals.com",
    address: "204, President Plaza, Nr. Thaltej Cross Road, S. G. Highway, Ahmedabad",
  },
};


