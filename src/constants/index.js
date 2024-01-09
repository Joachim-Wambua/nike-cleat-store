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
    description:
      "The Nike Phantom GT2 Academy football boots combine performance technology and a sleek design. They feature a lightweight upper with strategic areas of stretch for improved performance. The boots are designed for skillful attacks and have a textured upper for better ball control. They also have specialized studs for switching between surfaces.",
  },
  {
    id: "P002",
    imgURL: shoe2,
    name: "Nike Tiempo Legend 10",
    price: "$230.20",
    description:
      "The Nike Tiempo Legend 10 is a football boot that's lighter and sleeker than previous Tiempo models. It features FlyTouch Plus, a patented synthetic leather that's soft, light, and robust. The material is designed to give athletes more control over the ball. The Legend 10 also has FlyTouch Pro engineered leather, which is softer than natural leather and contours to the foot. It also works with All Conditions Control, a grippy texture that works even in wet weather. The Legend 10 is suitable for any position on the pitch. It has a moulded synthetic leather that mimics a quilted sensation for improved touch. The boot also has soft, responsive foam that helps players stay fresh and fast throughout the game. ",
  },
  {
    id: "P003",
    imgURL: shoe3,
    name: "Nike Mercurial Vapor Elite",
    price: "$230.20",
    description:
      "The Nike Mercurial Vapor Elite is a line of football boots designed for speed. The boots have a 360-degree construction that wraps around the foot for a secure fit. The boots use All Conditions Control (ACC) Technology and a micro-textured Flyknit upper to help you control the ball. They also have a specialized football-specific Zoom Air unit and enhanced grip on the upper. The boots have Tri-star studs for multidirectional traction. They have an insole for added comfort and support",
  },
  {
    id: "P004",
    imgURL: shoe4,
    name: "Nike Mercurial Superfly 9",
    price: "$200.20",
    description:
      "The Nike Mercurial Superfly 9 is a high-top soccer cleat with a bold design. It has a Zoom Air unit and flexible NikeSkin for exceptional touch. The cleats also have tri-star studs for multidirectional traction. The upper is made from kangaroo leather for comfort and protection. It also has a responsive upper material and a grippy, grid mesh design. The soccer-specific Air Zoom unit is positioned directly beneath the traction plate for energy return. The Flyknit wraps the ankle in soft, stretchy fabric for a secure feel. The design has been improved to better simulate the foot.",
  },
  {
    id: "P005",
    imgURL: shoe5,
    name: "Nike Mercurial Red",
    price: "$210.20",
    description:
      "The Nike Mercurial Red is a high-top soccer cleat with a bold design. It has a Zoom Air unit and flexible NikeSkin for exceptional touch. The cleats also have tri-star studs for multidirectional traction. The upper is made from kangaroo leather for comfort and protection. It also has a responsive upper material and a grippy, grid mesh design. The soccer-specific Air Zoom unit is positioned directly beneath the traction plate for energy return. The Flyknit wraps the ankle in soft, stretchy fabric for a secure feel. The design has been improved to better simulate the foot.",
  },
  {
    id: "P006",
    imgURL: shoe6,
    name: "Nike Mercurial Superfly 10",
    price: "$220.20",
    description:
      "The Nike Mercurial Superfly 10 is a football boot that uses Flyknit technology for a sock-like fit. The upper is made from kangaroo leather and K-fuse, which is a seamless joint of the leather and the FlyKnit. The forefoot of the cleat's upper has a thin layer of K-leather for a barefoot feel on the ball. The Mercurial Superfly 10 also has a Dynamic Fit Collar and Flywire cables that create a boot that provides a barefoot football feeling. The three-layer knitted upper is made from yarn, which provides a snug fit around the foot. The Mercurial Superfly 10 also has a new three-knit Flyknit weave that puts less materials between the foot and the ball.",
  },
  {
    id: "P007",
    imgURL: shoe13,
    name: "Nike Phantom GT2 Academy",
    price: "$230.20",
    description:
      "The Nike Phantom GT2 Academy football boots combine performance technology and a sleek design. They feature a lightweight upper with strategic areas of stretch for improved performance. The boots are designed for skillful attacks and have a textured upper for better ball control. They also have specialized studs for switching between surfaces.",
  },
  {
    id: "P008",
    imgURL: shoe8,
    name: "Nike Phantom GX Academy",
    price: "$220.20",
    description:
      "The Nike Phantom GX Academy is a low-top football boot that features NikeSkin and a mesh touch zone for enhanced precision. The agility plate is designed for quick swerving and sprinting. The product is responsibly designed using recycled materials from post-consumer and/or post-manufactured waste. he boots are contoured for comfort and feature a contoured footbed for added comfort.",
  },
  {
    id: "P009",
    imgURL: shoe9,
    name: "Nike Phantom GX2 Academy",
    price: "$230.20",
    description:
      "The Nike Phantom GX2 Academy is a low-top football boot that features NikeSkin and a mesh touch zone for enhanced precision. The agility plate is designed for quick swerving and sprinting. The product is responsibly designed using recycled materials from post-consumer and/or post-manufactured waste. he boots are contoured for comfort and feature a contoured footbed for added comfort.",
  },
  {
    id: "P010",
    imgURL: shoe10,
    name: "Nike Tiempo Legend 10",
    price: "$220.20",
    description:
      "Even Legends find ways to evolve. The latest iteration of this Elite boot has all-new FlyTouch Plus engineered leather. Softer than natural leather, it contours to your foot and works with All Conditions Control (a grippy texture even in wet weather) so you can dictate the pace of your game. The Nike Tiempo Legend 10 is a football boot that's lighter and sleeker than previous Tiempo models. It features FlyTouch Plus, a patented synthetic leather that's soft, light, and robust. The material is designed to give athletes more control over the ball.",
  },
  {
    id: "P011",
    imgURL: shoe11,
    name: "Nike Zoom Mercurial Superfly",
    price: "$230.20",
    description:
      "Nike describes the Nike Zoom Mercurial Superfly as a high-top football boot that provides a springy underfoot feel. The shoes are designed with a kangaroo leather upper and K-fuse, which is a seamless joint of the leather with the underlying FlyKnit. They also have a Zoom Air unit and flexible NikeSkin up top. Unique traction pattern offers super-charged traction with quick release to create separation. Flyknit wraps your ankle in soft, stretchy fabric for a secure feel. A redone design improves the fit, so that it better simulates the foot. We did this by conducting multiple wear tests on hundreds of athletes.",
  },
  {
    id: "P012",
    imgURL: shoe12,
    name: "Nike Phantom GX Elite",
    price: "$230.20",
    description:
      "The Nike Phantom GX Elite is a low-top soccer cleat made with Nike Gripknit, a sticky material that improves touch on the ball. The cleat is designed to mold to the shape of the foot and provide grip in wet or dry conditions. It also features an asymmetrical collar and heel for comfort and soft elements in the heel to reduce irritation and pressure. Nike Gripknit is a sticky material that provides better touch to the ball. It takes up most of the upper, including the first 2 laces, covering the most common strike zones of the foot. It molds to the shape of your foot and gives you equal grip in wet or dry conditions.",
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
      "Exceptional attention to detail and superior product quality exceeded my expectations. These Nike football boots not only meet high standards but also have a remarkable impact on pitch performance. Highly recommend!",
  },
  {
    imgURL: customer2,
    customerName: "Amina Nala",
    rating: 5.0,
    feedback:
      "The Nike Mercurial Superfly surpassed my expectations, going above and beyond. I'm definitely becoming a returning customer!!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Nike Mercurial Superfly 9 Club", link: "/product/P004" },
      { name: "Nike Phantom GT2 Academy", link: "/product/P007" },
      { name: "Nike Phantom GX Elite", link: "/product/P012" },
      { name: "Nike Tiempo Legend 10 Academy", link: "/product/P010" },
      { name: "Nike Zoom Mercurial Superfly", link: "/product/P011" },
      { name: "Nike Mercurial Vapor Elite", link: "/product/P003" },
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
