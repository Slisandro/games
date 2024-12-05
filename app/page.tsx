import FilterGameComponent from "../core/components/filter-game-component";
import ListGameComponent from "../core/components/list-games-component.";

export default function Home() {
  return (
    <main className="flex min-h-[100vh] gap-4 items-start justify-between p-8">
      <FilterGameComponent />
      <ListGameComponent />
    </main>
  )
}