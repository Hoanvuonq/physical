import Template from "./tempalte";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Template {...{ children }} >
          {children}
        </Template>
      </body>
    </html>
  );
}
