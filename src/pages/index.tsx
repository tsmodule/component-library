import { CardGrid } from "../components/CardGrid";
import { GetStarted } from "../components/GetStarted";
import { Welcome } from "../components/Welcome";

export default function Home() {
  return (
    <main>
      <Welcome />
      <GetStarted />
      <CardGrid />
    </main>
  );
}
