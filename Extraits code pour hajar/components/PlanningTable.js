"use client";

import { useSelector, useDispatch } from 'react-redux';
import { removePlanning } from '../redux/planningSlice';
import Link from 'next/link';

export default function PlanningTable() {
  const plannings = useSelector((state) => state.planning.plannings);
  const formateurs = useSelector((state) => state.planning.formateurs); // Formateurs dynamiques
  const days = useSelector((state) => state.planning.days); // Jours dynamiques
  const dispatch = useDispatch();

  // Filtrer les plannings par jour et formateur
  const getPlanningsByDayAndFormateur = (day, formateur) => {
    return plannings.filter(
      (planning) => planning.day === day && planning.professor === formateur
    );
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Emploi du Temps des Formations</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-4 text-left">Formateur</th>
              {days.map((day) => (
                <th key={day} className="p-4">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {formateurs.map((formateur) => (
              <tr key={formateur} className="even:bg-gray-100">
                <td className="border p-4 font-medium bg-blue-100">{formateur}</td>
                {days.map((day) => (
                  <td key={day} className="border p-4">
                    {getPlanningsByDayAndFormateur(day, formateur).map((planning) => (
                      <div key={planning.id} className="bg-green-200 p-2 mb-2 rounded-lg shadow-md">
                        <p className="font-semibold">{planning.name}</p>
                        <p className="text-sm text-gray-700">Salle : {planning.room}</p>
                        <p className="text-sm text-gray-700">Heure : {planning.time}</p>
                        <div className="mt-2 flex justify-center space-x-2">
                          <Link href={`/edit-planning/${planning.id}`}>
                            <button className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600">
                              Modifier
                            </button>
                          </Link>
                          <button
                            onClick={() => dispatch(removePlanning(planning.id))}
                            className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={() => window.print()}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 shadow-lg"
        >
          Imprimer
        </button>
      </div>
    </div>
  );
}
