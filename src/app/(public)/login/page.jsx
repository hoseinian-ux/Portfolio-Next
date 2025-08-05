'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // ✅ اگر کاربر قبلاً لاگین کرده بود، به داشبورد ریدایرکت کن
  useEffect(() => {
    const token = document.cookie.split('; ').find(c => c.startsWith('token='))
    if (token) {
      router.replace('/dashboard') // جلوگیری از نمایش صفحه لاگین
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      if (username === 'testuser' && password === '1234') {
        document.cookie = "token=fake-token; path=/; max-age=86400"
        router.push('/dashboard')
      } else {
        setError('نام کاربری یا رمز عبور اشتباه است')
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className='mb-30'> 
        <p className='text-xl md:text-2xl font-bold'>  برای تست و بررسی داشبورد پروژه که دارای ویژگی Crud محصولات هست. لطفا این اطلاعات را وارد کنید

      نام کاربری : testuser
       رمز عبور: 1234 
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">ورود به پنل</h1>

        {error && <div className="text-red-600 text-sm text-center">{error}</div>}

        <input
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none"
          required
        />

        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-xl focus:outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          {loading ? 'در حال ورود...' : 'ورود'}
        </button>
      </form>
    </div>
  )
}
