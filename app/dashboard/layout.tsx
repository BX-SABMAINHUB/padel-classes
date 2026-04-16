import AdminButton from "@/components/AdminButton";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <AdminButton />
    </div>
  );
}
