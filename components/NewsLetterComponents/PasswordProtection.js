'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const PasswordProtection = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Password for the newsletter (you can change this to any password you want)
  const CORRECT_PASSWORD = 'newsletter2024'

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('newsletter_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('newsletter_authenticated', 'true')
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('newsletter_authenticated')
    setPassword('')
    setError('')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Newsletter Access</h1>
            <p className="text-gray-600">Enter the password to access the newsletter content</p>
            <div>
                <Image  
                    src="/ivista_logo.svg"
                    alt="password"
                    width={100}
                    height={100}
                    className='object-cover w-1/2 mx-auto pt-5'
                />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
                required
              />
            </div>
            
            {error && (
              <div className="text-red-600 text-sm text-center">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Access Newsletter
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-blue-600 text-white py-2 px-4 text-center">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="text-sm">🔒 Newsletter Content - Authenticated</span>
          <button
            onClick={handleLogout}
            className="text-sm underline hover:no-underline"
          >
            Logout
          </button>
        </div>
      </div>
      {children}
    </div>
  )
}

export default PasswordProtection 