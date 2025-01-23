import SideBar from "./sideBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-muted flex gap-6  ">
      <SideBar />

      {children}
    </div>
  );
}
