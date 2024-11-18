import React from "react";
import Table from "./components/newComponent";

const data = [
  {
    rank: 1,
    city: "Tokyo",
    country: "Japan",
    population: "37,468,000"
  },
  {
    rank: 2,
    city: "Delhi",
    country: "India",
    population: "28,514,000"
  },
  {
    rank: 3,
    city: "Shanghai",
    country: "China",
    population: "25,582,000"
  },
  {
    rank: 4,
    city: "São Paulo",
    country: "Brazil",
    population: "21,650,000"
  },
  {
    rank: 5,
    city: "Mexico City",
    country: "Mexico",
    population: "21,581,000"
  },
  {
    rank: 6,
    city: "Cairo",
    country: "Egypt",
    population: "20,076,000"
  },
  {
    rank: 7,
    city: "Mumbai",
    country: "India",
    population: "19,980,000"
  },
  {
    rank: 8,
    city: "Beijing",
    country: "China",
    population: "19,618,000"
  },
  {
    rank: 9,
    city: "Dhaka",
    country: "Bangladesh",
    population: "19,578,000"
  },
  {
    rank: 10,
    city: "Osaka",
    country: "Japan",
    population: "19,281,000"
  }
];

export function App() {
  return (
    <div className="flex flex-col space-y-2 m-2">
      <p>Hello</p>
      <p>Skillifiers!</p>
      <Table data={data} />
    </div>
  );
}
