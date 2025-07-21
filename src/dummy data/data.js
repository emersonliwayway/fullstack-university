// some dummy data to layout react pages, i don't know how the data looks on the backend yet so this will likely change before using API

const departments = [
  {
    id: 1,
    name: "Department #1",
    description: "Description of Department #1",
    imgUrl: "imgURl",
    phone: "000-000-0000",
    email: "department1@fsu.com",
    faculty: [1, 2],
  },
  {
    id: 2,
    name: "Department #2",
    description: "Description of Department #2",
    imgUrl: "imgURl2",
    phone: "111-111-1111",
    email: "department2@fsu.com",
    faculty: [1, 2],
  },
];

const faculty = [
  {
    id: 1,
    fname: "Yoshi",
    lname: "Recto",
    bio: "Yoshi is a dog and a professor.",
    profile: "imgUrl",
    phone: "333-333-3333",
    email: "yoshi@fsu.com",
  },
  {
    id: 2,
    fname: "Bosco",
    lname: "Recto",
    bio: "Bosco is a professor and a dog.",
    profile: "imgUrl",
    phone: "444-444-4444",
    email: "bosco@fsu.com",
  },
];

export default { departments, faculty };
