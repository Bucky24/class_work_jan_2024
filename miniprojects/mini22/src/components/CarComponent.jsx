import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { START_CAR, STOP_CAR, addCar } from '../utils/actions';
import { getCars } from '../utils/reducers';

export default function CarComponent() {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);

  const [newCarMake, setNewCarMake] = useState('');
  const [newCarModel, setNewCarModel] = useState('');
  const [newCarYear, setNewCarYear] = useState('');

  return (
    <>
      <h1>Digital Garage</h1>
      <section className="car-input">
        <div>
          <div className="add-car">
            Add a car:
            <input
              defaultValue={newCarMake}
              onChange={(event) => setNewCarMake(event.target.value)}
              placeholder="New car make..."
              type="text"
            />
            <input
              defaultValue={newCarModel}
              onChange={(event) => setNewCarModel(event.target.value)}
              placeholder="New car model..."
              type="text"
            />
            <input
              defaultValue={newCarYear}
              onChange={(event) => setNewCarYear(event.target.value)}
              placeholder="New car year..."
              type="text"
            />
            <button
              onClick={() =>
                dispatch(addCar({
                  make: newCarMake,
                  model: newCarModel,
                  year: newCarYear,
                }))
              }
            >
              Add Car
            </button>
          </div>
        </div>
      </section>
      <section className="car-list">
        {cars.map((car) => (
          <div key={car.id} id={car.id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {car.model} <br />
              <span style={{ fontSize: '1rem' }}>
                This car was manufactured in {car.year}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{car.make}</p>
              <code>Car ID: {car.id}</code>
            </div>
            <span style={{ fontSize: '1rem' }}>
              {car.isRunning ? 'Car is running 🏎️' : 'Car is off 💤'}
              <button
                id="turnOn"
                onClick={
                  !car.isRunning
                    ? () => dispatch({ type: START_CAR, payload: car.id })
                    : () => dispatch({ type: STOP_CAR, payload: car.id })
                }
              >
                Toggle Engine
              </button>
            </span>
          </div>
        ))}
      </section>
    </>
  );
}