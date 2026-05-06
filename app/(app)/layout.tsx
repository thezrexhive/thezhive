import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { DarkSidebar } from "@/components/layout/DarkSidebar";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-dark grain-dark relative">
      {/* Ambient light blobs */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-primary-900/20 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-900/15 blur-[100px] pointer-events-none" aria-hidden="true" />
      <DarkSidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
}
