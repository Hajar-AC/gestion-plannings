"use client";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import { editPlanning } from '../../../redux/planningSlice';

export default function EditPlanningPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const planning = useSelector((state) =>
    state.planning.plannings.find((planning) => planning.id === Number(id))
  );

  const [name, setName] = useState(planning ? planning.name : '');
  const [date, setDate] = useState(planning ? planning.date : '');
  const [room, setRoom] = useState(planning ? planning.room : ''); // Salle
  const [professor, setProfessor] = useState(planning ? planning.professor : ''); // Professeur
  const [time, setTime] = useState(planning ? planning.time : ''); // Heure

  useEffect(() => {
    if (planning) {
      setName(planning.name);
      setDate(planning.date);
      setRoom(planning.room);
      setProfessor(planning.professor);
      setTime(planning.time);
    }
  }, [planning]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPlanning({ id: Number(id), name, date, room, professor, time }));
    router.push('/planning-list');
  };

  if (!planning) {
    return <p>Planning non trouvé</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Modifier le planning</h1>
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
          Enregistrer
        </button>
      </form>
    </div>
  );
}
