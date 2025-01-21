import { Navigation } from "./Navigation";
import SideBar from "./sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-muted h-screen flex gap-6  ">
      <SideBar />

      {children}
    </div>
  );
}
