import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="1"
      className="flex h-screen flex-col md:flex-row md:overflow-hidden"
    >
      <div id="2" className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div id="3" className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}
