import Link from "next/link";

const items = [
  {
    title: "3-d Scatterplots",
    description:
      "Demos of test datasets and API fetching using Plotly JS client",
    href: "/charts/3d",
  },
  {
    title: "2-d Scatterplots",
    description: "Demos of test datasets using D3.js",
    href: "/charts/2d",
  },
  {
    title: "Data Science screen flow",
    description: "Mock some screen flows, mimicking Nomic Atlas",
    href: "/flow",
  },
];

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="pb-10 text-2xl text-center">Vector visualizations</h1>
      <ul className="space-y-10">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col items-center max-w-md text-center"
          >
            <Link
              href={item.href}
              className="text-xl pb-2 underline hover:no-underline"
            >
              {item.title}
            </Link>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
