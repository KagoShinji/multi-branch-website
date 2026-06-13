export interface Branch {
  id: string;
  name: string;
  location: string;
  contact: string;
  isOpen247: boolean;
}

export const branches: Branch[] = [
  {
    id: "mactan-town-center",
    name: "Mactan Town Center",
    location: "Lapu-Lapu City",
    contact: "Not Available",
    isOpen247: true,
  },
  {
    id: "city-time-square",
    name: "City Time Square",
    location: "Mandaue City",
    contact: "09766163877",
    isOpen247: true,
  },
  {
    id: "one-paseo",
    name: "One Paseo",
    location: "Banilad, Cebu City",
    contact: "09763174967",
    isOpen247: false,
  },
  {
    id: "guadalupe",
    name: "Guadalupe",
    location: "Cebu City",
    contact: "09765321296",
    isOpen247: false,
  },
  {
    id: "san-isidro",
    name: "San Isidro",
    location: "Talisay City",
    contact: "09937293199",
    isOpen247: true,
  },
  {
    id: "lapu-lapu-city",
    name: "Lapu-Lapu City Branch",
    location: "Kagudoy Road, across St. Augustine International School",
    contact: "09306407304",
    isOpen247: false,
  },
];
