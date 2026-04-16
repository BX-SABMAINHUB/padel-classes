"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminButton() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleAccess = () => {
    if (password === "Managebac") {
      router.push("/admin");
      setShowPrompt(false);
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <>
      <button onClick={() => setShowPrompt(true)} className="fixed bottom-4 right-4 bg-gray-700 text-white w-12 h-12 rounded-full text-2xl shadow-lg hover:bg-gray-800 z-50">
        +
      </button>
      {showPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h3 className="text-lg font-bold mb-4">Acceso de Administrador</h3>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" className="w-full p-2 border rounded mb-4" />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowPrompt(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Cancelar</button>
              <button onClick={handleAccess} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Acceder</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
