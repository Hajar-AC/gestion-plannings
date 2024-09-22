"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPlanning } from '../../redux/planningSlice';

export default function EditPlanningModal({ planning, closeModal }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(planning.name);
  const [date, setDate] = useState(planning.date);
  const [room, setRoom] = useState(planning.room);
  const [professor, setProfessor] = useState(planning.professor);
  const [time, setTime] = useState(planning.time);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPlanning({ id: planning.id, name, date, room, professor, time }));
    closeModal(); // Fermer le modal après soumission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-300 ease-in-out scale-95">
        <h2 className="text-2xl font-bold mb-4">Modifier le planning</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 text-gray-700 p-2 rounded mr-2 hover:bg-gray-400"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
