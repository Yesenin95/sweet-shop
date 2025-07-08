import Logo from "./logo";
import SearchBlock from "./searchBlock";
import UserBlock from "./userBlock";

export function Header() {
   return <>

      <header className="bg-white w-full items-center flex flex-col md:flex-row gap-y-5 xl:gap-y-7 justify-center">
         <div className="flex flex-row gap-4 xl:gap-10 py-2 items-center">
            <Logo />
            <SearchBlock />
         </div>
         <UserBlock />
      </header>

   </>
}
