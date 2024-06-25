import Menu from "./menu";
export default function Header() {
  const Head = () => {
    const menuitems = [
      { title: "home" },
      { title: "about us" },
      { title: "contact us" },
      { title: "docs" },
    ];
    return (
      <div className="w-full">
        <div className="w-full fixed top-0 flex justify-center bg-white shadow-lg capitalize">
          {menuitems &&
            menuitems.map((item) => {
              return (
                <div className="p-2 hover:text-blue-600 cursor-pointer">
                  {item.title}
                </div>
              );
            })}
        </div>
      </div>
    );
  };
  return (
    <div className="w-full">
      <Head />
    </div>
  );
}
