import { Header } from "../components";
import Menu from "../components/menu";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 mt-10">
        <Menu />
        <div className="w-2/3"></div>
      </div>
    </>
  );
}
