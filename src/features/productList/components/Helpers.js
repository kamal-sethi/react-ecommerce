export const sortOptions = [
  { name: "Best Rating", sort: "rating", sort: "desc", current: false },

  { name: "Price: Low to High", sort: "price", current: false },
  { name: "Price: High to Low", sort: "-price", current: false },
];

export const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
export const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "beauty", label: "beauty", checked: false },
      { value: "fragrances", label: "fragrances", checked: false },
      { value: "furniture", label: "furniture", checked: false },
      { value: "groceries", label: "groceries", checked: false },
    ],
  },
];
