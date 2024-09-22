"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlanning } from '../../redux/planningSlice';

export default function AddPlanning() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [room, setRoom] = useState('');       // Nouvelle salle
  const [professor, setProfessor] = useState('');  // Nouveau professeur
  const [time, setTime] = useState('');       // Nouvelle heure
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlanning = { id: Date.now(), name, date, room, professor, time };
    dispatch(addPlanning(newPlanning));
    setName('');
    setDate('');
    setRoom('');
    setProfessor('');
    setTime('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Ajouter un nouveau planning</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Nom de la formation :</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date :</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Salle :</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Professeur :</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Heure :</label>
          <input
            type="time"
            className="w-full p-2 border border-gray-300 rounded"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
