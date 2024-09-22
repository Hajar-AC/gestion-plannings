"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePlanning } from '../../redux/planningSlice';
import EditPlanningModal from './EditPlanningModal';
import { PencilSquareIcon, TrashIcon, PrinterIcon } from '@heroicons/react/24/solid';  

export default function PlanningList() {
  const plannings = useSelector((state) => state.planning.plannings);
  const dispatch = useDispatch();
  const [selectedPlanning, setSelectedPlanning] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (planning) => {
    setSelectedPlanning(planning);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlanning(null);
  };

  const handlePrint = () => {
    window.print();  
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Emploi du temps</h1>

      <div className="flex justify-center my-4">
        <Image
          src="/assets/logo.png"  
          alt="Logo de l'application"
          width={150}
          height={80}
          className="rounded-lg"
        />
      </div>

      <button
        onClick={handlePrint}
        className="bg-green-500 text-white p-2 rounded mb-4 flex items-center hover:bg-green-700"
      >
        <PrinterIcon className="h-5 w-5 mr-2" />
        Imprimer 
      </button>

      <table className="min-w-full table-auto mt-4 border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Jour</th>
            <th className="border p-2">Formation</th>
            <th className="border p-2">Professeur</th>
            <th className="border p-2">Salle</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Heure</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {plannings.map((planning) => (
            <tr key={planning.id} className="text-center odd:bg-gray-100 even:bg-white">
              <td className="border p-2">{new Date(planning.date).toLocaleDateString('fr-FR', { weekday: 'long' })}</td>
              <td className="border p-2">{planning.name}</td>
              <td className="border p-2">{planning.professor}</td>
              <td className="border p-2">{planning.room}</td>
              <td className="border p-2">{planning.date}</td>
              <td className="border p-2">{planning.time}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(planning)}
                  className="bg-yellow-500 text-white p-1 rounded mr-2 flex items-center hover:bg-yellow-700"
                >
                  <PencilSquareIcon className="h-5 w-5 mr-1" />
                </button>
                <button
                  onClick={() => dispatch(removePlanning(planning.id))}
                  className="bg-red-500 text-white p-1 rounded flex items-center hover:bg-red-700"
                >
                  <TrashIcon className="h-5 w-5 mr-1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <EditPlanningModal planning={selectedPlanning} closeModal={closeModal} />
      )}
    </div>
  );
}
