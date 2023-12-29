import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe1,
  shoe2,
  shoe3,
  shoe4,
  shoe5,
  shoe6,
  // shoe7,
  shoe8,
  shoe9,
  shoe10,
  shoe11,
  shoe12,
  shoe13,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about-us", label: "About Us" },
  { href: "/#products", label: "Products" },
  { href: "/#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    id: "S001",
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    id: "S002",
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    id: "S003",
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { id: "ST01", value: "1k+", label: "Brands" },
  { id: "ST02", value: "500+", label: "Shops" },
  { id: "ST03", value: "250k+", label: "Customers" },
];

export const products = [
  {
    id: "P001",
    imgURL: shoe1,
    name: "Nike Phantom GT2 Academy",
    price: "$220.20",
  },
  {
    id: "P002",
    imgURL: shoe2,
    name: "Nike Tiempo Legend 10",
    price: "$230.20",
  },
  {
    id: "P003",
    imgURL: shoe3,
    name: "Nike Mercurial Vapor Elite",
    price: "$230.20",
  },
  {
    id: "P004",
    imgURL: shoe4,
    name: "Nike Mercurial Superfly 9 Club",
    price: "$200.20",
  },
  {
    id: "P005",
    imgURL: shoe5,
    name: "Nike Mercurial Red",
    price: "$210.20",
  },
  {
    id: "P006",
    imgURL: shoe6,
    name: "Nike Mercurial Superfly 10",
    price: "$220.20",
  },
  {
    id: "P007",
    imgURL: shoe13,
    name: "Nike Phantom GT2 Academy",
    price: "$230.20",
  },
  {
    id: "P008",
    imgURL: shoe8,
    name: "Nike Phantom GX Academy",
    price: "$220.20",
  },
  {
    id: "P009",
    imgURL: shoe9,
    name: "Nike Phantom GX2 Academy",
    price: "$230.20",
  },
  {
    id: "P010",
    imgURL: shoe10,
    name: "Nike Tiempo Legend 10 Academy",
    price: "$220.20",
  },
  {
    id: "P011",
    imgURL: shoe11,
    name: "Nike Zoom Mercurial Superfly",
    price: "$230.20",
  },
  {
    id: "P012",
    imgURL: shoe12,
    name: "Nike Phantom GX Elite",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Jabari Amari",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Amina Nala",
    rating: 5.0,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Nike Mercurial Superfly 9 Club", link: "/" },
      { name: "Nike Phantom GT2 Academy", link: "/" },
      { name: "Nike Phantom GX Elite", link: "/" },
      { name: "Nike Tiempo Legend 10 Academy", link: "/" },
      { name: "Nike Zoom Mercurial Superfly", link: "/" },
      { name: "Nike Mercurial Vapor Elite", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
