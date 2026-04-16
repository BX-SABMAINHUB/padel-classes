"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function TaskForm({ classId, onTaskCreated }: any) {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = async (data: any) => {
    // Lógica para subir PDF a Firebase Storage y crear documento en Firestore
    onTaskCreated();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("title")} placeholder="Título" className="w-full p-2 border rounded" />
      <textarea {...register("description")} placeholder="Descripción" className="w-full p-2 border rounded" />
      <input type="datetime-local" {...register("dueDate")} className="w-full p-2 border rounded" />
      <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full p-2 border rounded" />
      <select {...register("grade")} className="w-full p-2 border rounded">
        <option value="">Calificación IB (1-8)</option>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => <option key={g} value={g}>{g}</option>)}
      </select>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Guardar Tarea</button>
    </form>
  );
}
