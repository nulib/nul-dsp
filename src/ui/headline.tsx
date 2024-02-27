import { clsx } from "clsx";

export default function Headline({
  children,
  subhead,
}: {
  children: React.ReactNode;
  subhead?: boolean;
}) {
  return (
    <h2
      className={clsx(
        `font-medium text-center py-3`,
        subhead ? "text-2xl" : "text-4xl"
      )}
    >
      {children}
    </h2>
  );
}
