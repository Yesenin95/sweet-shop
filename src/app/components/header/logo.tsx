import Image from "next/image"
import Link from "next/link"
export default function logo() {
   return <Link href='/' className="cursor-pointer">
      <div className="relative w-20 h-15">
         <Image src='/logo.svg' alt="Лого" fill />
      </div>
   </Link>
}
