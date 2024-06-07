export const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
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
    id: "brand",
    name: "brand",
    options: [
      { value: 'gucci', label: 'gucci', checked: false },
      { value: 'chanel', label: 'chanel', checked: false },
      { value: 'calvin klein', label: 'calvin klein', checked: false },
      { value: 'dolce & gabbana', label: 'dolce & gabbana', checked: false },
      { value: 'dior', label: 'dolce & dior', checked: false },
      
      { value: 'Annibale Colombo', label: 'Annibale Colombo', checked: false },
      
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: 'beauty', label: 'beauty', checked: false },
      { value: 'fragrances', label: 'fragrances', checked: false },
      { value: 'furniture', label: 'furniture', checked: false },
      { value: 'furniture', label: 'furniture', checked: false },

      
    ],
  },
];
