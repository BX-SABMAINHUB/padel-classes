"use client";
import Link from "next/link";

export default function ClassCard({ id, name, description }: any) {
  return (
    <Link href={`/dashboard/classes/${id}`}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
