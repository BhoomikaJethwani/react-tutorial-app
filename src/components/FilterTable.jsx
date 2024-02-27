import React, { useState } from "react";

// table component: <table></table>
// table heading: <thead></thead>
// table body: <tbody></tbody>
// table row: <tr></tr>
// table header: <th></th>
// table cell: <td></td>

const App = () => {
  const stocks = [
    { security: "Apple", quantity: 1058, price: 184.57 },
    { security: "Samsung", quantity: 3514, price: 1335.0 },
    { security: "Nokia", quantity: 1355, price: 3.19 },
    { security: "Vodafone", quantity: 2417, price: 66.44 },
  ];

  const [security, setSecurity] = useState("");
  const [isFilter, setIsFiler] = useState(false);

  const handleChange = (event) => {
    setSecurity(event.target.value);
    setIsFiler(true);
  };

  return (
    <div>
      <input
        placeholder="Enter security"
        value={security}
        onChange={handleChange}
      ></input>
      <table>
        <thead>
          <th>Security</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Notion</th>
        </thead>
        <tbody>
          {stocks
            .filter((stock) =>
              security
                ? stock.security.toUpperCase() == security.toUpperCase()
                : stock
            )
            .map((stock) => (
              <tr>
                <td>{stock.security}</td>
                <td>{stock.quantity}</td>
                <td>{stock.price}</td>
                <td>{stock.quantity * stock.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
  //<div>Code Pair Test</div>
};

export default App;
