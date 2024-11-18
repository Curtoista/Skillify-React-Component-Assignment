import React from "react";

const Table = ({ data }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Rank</th>
          <th>City</th>
          <th>Country</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.rank}>
            <td>{row.rank}</td>
            <td>{row.city}</td>
            <td>{row.country}</td>
            <td>{row.population}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
