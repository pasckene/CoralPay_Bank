import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Replace this with actual user authentication logic
  const loggedIn = {
    $id: "mock-$id",
    id: "mock-id",
    userId: "mock-userId",
    name: "Mock User",
    email: "mockuser@example.com",
    dwollaCustomerUrl: "mock-dwollaCustomerUrl",
    dwollaCustomerId: "mock-dwollaCustomerId",
    imageUrl: "/mock-image.png",
    emailVerified: true,
    phone: "123-456-7890",
    phoneVerified: false,
    isEmailVerified: true,
    isPhoneVerified: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    // Add any other required User properties here
    firstName: "Mock",
    lastName: "User",
    address1: "123 Mock St",
    address2: "Apt 1",
    city: "Mockville",
    state: "CA",
    postalCode: "12345",
    country: "USA",
    dateOfBirth: "1990-01-01", // mock value
    ssn: "123-45-6789" // mock value
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
