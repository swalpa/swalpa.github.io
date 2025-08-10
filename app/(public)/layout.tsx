import { TooltipProvider } from "@/components/ui/tooltip";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-ful flex justify-center">
      <div className="w-[85%] flex justify-center">
        <TooltipProvider>{children}</TooltipProvider>
      </div>
    </main>
  );
}
