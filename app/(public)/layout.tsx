import Footer from "@/components/common/Footer"

export default function PublicPagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      {children}
      <Footer/>
    </section>
  )
}