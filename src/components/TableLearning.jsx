import React, { useState } from 'react';

const TableLearning = () => {
  const [number, setNumber] = useState(2);
  const [limit, setLimit] = useState(10);

  const handleNumberChange = (e) => {
    const val = Number(e.target.value);
    if (val >= 1 && val <= 20) setNumber(val);
  };

  const handleLimitChange = (e) => {
    const val = Number(e.target.value);
    if (val >= 1 && val <= 20) setLimit(val);
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 1; i <= limit; i++) {
      rows.push(
        <tr key={i} className={i % 2 === 0 ? 'even-row' : 'odd-row'}>
          <td>{number} × {i}</td>
          <td>=</td>
          <td>{number * i}</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <section className="table-learning">
      <h2>Multiplication Table Visualizer</h2>
      <div className="inputs">
        <label>
          Number (1-20):&nbsp;
          <input type="number" min="1" max="20" value={number} onChange={handleNumberChange} aria-label="Select multiplication number" />
        </label>
        <label>
          Limit (1-20):&nbsp;
          <input type="number" min="1" max="20" value={limit} onChange={handleLimitChange} aria-label="Select multiplier limit" />
        </label>
      </div>

      <table className="multiplication-table" aria-label="Multiplication Table">
        <thead>
          <tr>
            <th>Expression</th>
            <th></th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </section>
  );
};

export default TableLearning;
