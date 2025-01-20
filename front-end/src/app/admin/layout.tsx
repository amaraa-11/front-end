import { Navigation } from "./_components/Navigation";
import SideBar from "./_components/sideBar";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <div className="bg-muted h-screen flex gap-6  ">
          <SideBar />
          <Navigation />
          {children}
        </div>
      </SignedIn>
    </ClerkProvider>
  );
}
