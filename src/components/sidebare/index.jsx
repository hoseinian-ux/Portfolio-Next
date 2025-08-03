// components/Sidebar.jsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()

  const linkClasses = (path) =>
    `block px-4 py-2 rounded-xl hover:bg-blue-100 ${
      pathname === path ? 'bg-blue-200 font-bold' : ''
    }`

  return (
    <aside className="w-20% bg-white shadow-md p-10 space-y-4 ">
      <h2 className="text-xl font-semibold mb-4">داشبورد</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className={linkClasses('/dashboard')}>
  خانه
</Link>
<Link href="/products" className={linkClasses('/dashboard/products')}>
  لیست محصولات
</Link>
<Link href="/users" className={linkClasses('/dashboard/users')}>
  کاربران
</Link>

        <button
          onClick={() => {
            document.cookie = 'token=; path=/; max-age=0'
window.location.href = '/login'

          }}
          className="w-full text-left text-red-600 hover:text-red-800 mt-4"
        >
          خروج
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
