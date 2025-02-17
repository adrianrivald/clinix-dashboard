import Image from "next/image";

function Navmenu() {
  return (
    <nav>
      <ul className="list-style-none flex flex-col gap-4">
        <li className="py-4 flex items-center w-full cursor-pointer">
          <Image
            src="/assets/icons/side-menu.svg"
            width={4}
            height={52}
            alt="side-menu"
          />
          <div className="ml-8 flex items-center gap-3">
            <Image
              src="/assets/icons/dashboard.svg"
              width={18}
              height={18}
              alt="dashboard"
            />
            <span className="font-bold text-primary-500">Dashboard</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export function Sidebar() {
  return (
    <div className="hidden lg:block pt-[2rem] h-screen border-r border-neutral-250 min-w-[300px] overflow-auto">
      <Navmenu />
    </div>
  );
}
