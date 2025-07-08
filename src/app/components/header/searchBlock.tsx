import Link from "next/link";

export default function searchBlock() {
   return <div className="flex">
      <Link href='/catalog'>Каталог</Link>
      <input type="search" name="search" id="search" />
   </div>
}
