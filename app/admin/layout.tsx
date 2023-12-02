import Sidebar from "@/components/admin-panel/Sidebar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="w-full min-h-[96vh] flex flex-col-reverse md:flex-row">
        <Sidebar/>
        {children}
      </section>
    )
  }