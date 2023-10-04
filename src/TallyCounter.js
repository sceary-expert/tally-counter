import React, { useState } from 'react';
import './TallyCounter.css'; 
function TallyCounter() {
    const [counters, setCounters] = useState([
      { id: 1, name: 'Counter 1', count: 0, startValue: 0 },
    ]);

  const increment = (id) => {
    const updatedCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, count: counter.count + 1 } : counter
    );
    setCounters(updatedCounters);
  };

  const decrement = (id) => {
    const updatedCounters = counters.map((counter) =>
      counter.id === id && counter.count > 0
        ? { ...counter, count: counter.count - 1 }
        : counter
    );
    setCounters(updatedCounters);
  };

  const resetCounter = (id) => {
    const updatedCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, count: counter.startValue } : counter
    );
    setCounters(updatedCounters);
  };

  const addCounter = () => {
    const newCounterId = counters.length + 1;
    setCounters([
      ...counters,
      { id: newCounterId, name: `Counter ${newCounterId}`, count: 0, startValue: 0 },
    ]);
  };

  const removeCounter = (id) => {
    const updatedCounters = counters.filter((counter) => counter.id !== id);
    setCounters(updatedCounters);
  };

  const updateCounterName = (id, newName) => {
    const updatedCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, name: newName } : counter
    );
    setCounters(updatedCounters);
  };

  const updateCounterStartValue = (id, newStartValue) => {
    const updatedCounters = counters.map((counter) =>
      counter.id === id ? { ...counter, startValue: newStartValue } : counter
    );
    setCounters(updatedCounters);
  };

  return (
    <div className="tally-counter-form">
    <h2>Tally Counters</h2>
    <button className="add-counter-button" onClick={addCounter}>
      Add Counter
    </button>
    <div className="counters-container">
      {counters.map((counter) => (
        <div className="counter" key={counter.id}>
            <h3 className='counter-name'>{counter.name}</h3>
           <input
              type="text"
              value={counter.name}
              onChange={(e) => updateCounterName(counter.id, e.target.value)}
            />
            <input
                type="number"
                value={counter.count}
                onChange={(e) =>
                  updateCounterStartValue(counter.id, parseInt(e.target.value))
                }
              />
            <button onClick={() => decrement(counter.id)}>-</button>
            <span>{counter.count}</span>
            <button onClick={() => increment(counter.id)}>+</button>
            <button onClick={() => resetCounter(counter.id)}>Reset</button>
            <label>
              
              
            </label>
            <button onClick={() => removeCounter(counter.id)}>Remove</button>
        </div>
      ))}
    </div>
  </div>
  );
}

export default TallyCounter;
