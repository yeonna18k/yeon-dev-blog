import Image from 'next/image'
import Link from 'next/link'
import Category from './Category'

export default async function Header() {
  return (
    <div className="h-16 content-center">
      <div className="max-w-screen-lg flex justify-between mx-auto">
        <div className="flex gap-2">
          <Link href="/">
            {' '}
            <Image
              src="/assets/favicon.ico"
              alt="user-image"
              width={24}
              height={24}
            />
          </Link>
          강낭코딩
        </div>
        <div>
          <Category />
        </div>
      </div>
    </div>
  )
}
