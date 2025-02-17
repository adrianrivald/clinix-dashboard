import Image from "next/image";

function Navmenu() {
  return (
    <nav className="w-full border-t border-neutral-250">
      <ul className="flex justify-center gap-8">
        <li className="bg-gradient-to-b from-[#FFEFEF] via-white to-white via-50%  pb-4 flex items-center cursor-pointer">
          <div className="flex flex-col items-center gap-3">
            <div className="h-[4px]">
              <Image
                src="/assets/icons/bottom-menu.svg"
                width={72}
                height={4}
                alt="bottom-menu"
              />
            </div>
            <Image
              src="/assets/icons/home.svg"
              width={20}
              height={20}
              alt="home"
            />
            <span className="font-bold text-primary-500">Home</span>
          </div>
        </li>
        <li className="pb-4 flex items-center cursor-pointer">
          <div className="flex flex-col items-center gap-3">
            <div className="h-[4px]" />

            <Image
              src="/assets/icons/person.svg"
              width={20}
              height={20}
              alt="person"
            />
            <span className="">Profil</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export function MenubarBottom() {
  return (
    <div className="block lg:hidden fixed bottom-0 w-full flex">
      <Navmenu />
    </div>
  );
}
