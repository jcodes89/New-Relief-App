
import './globals.css'
import { AuthProvider } from './api/auth/Provider'
import Footer from './components/Footer/Footer'
import Script from 'next/script'

export default function RootLayout({children}: any) {
  return (
    <html data-theme="winter" lang="en">
      <head>
        <title>Disaster Relief App</title>
        <meta name='description' content='Join Disaster relief to help others in need, you can become a member and start serving the community.  Login or register as a user.'/>
      </head>
      <body className='pl-0'>
        <AuthProvider>
          <main className='p-0'>
            {children}
          </main>
        </AuthProvider>
      </body>
      <Script src='https://kit.fontawesome.com/5c59429581.js' defer async />
    </html>
  )
}
