import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Lorenz Landing" },
    { name: "Jason Lorenz", content: "Resume for Jason Lorenz" },
  ];
};

export default function Index() {
  return <div></div>;
}
