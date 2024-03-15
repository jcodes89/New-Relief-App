
import './globals.css'
import { AuthProvider } from './api/auth/Provider'
import Footer from './components/Footer/Footer'
import Script from 'next/script'

export default function RootLayout({children}: any) {
  return (
    <html data-theme="winter" lang="en">
      <body className='pl-0'>
        <AuthProvider>
          <main className='p-0'>
            {children}
          </main>
        </AuthProvider>
      </body>
      <Script src='https://kit.fontawesome.com/5c59429581.js' defer async/>

    </html>
  )
}
