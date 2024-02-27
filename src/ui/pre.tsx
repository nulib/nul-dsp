export default function Pre({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-gray-50 p-2 rounded-md overflow-auto text-xs text-gray-500">
      {children}
    </pre>
  );
}
