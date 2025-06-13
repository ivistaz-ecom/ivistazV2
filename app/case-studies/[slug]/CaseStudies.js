'use client'
import React, { useEffect, useState } from 'react'
import ConfigData from '../../../../config'

const CaseStudies = ({ slug }) => {
  const [data, setData] = useState(null)
  const siteUrl = ConfigData.wpApiUrl
  const serverUrl = ConfigData.SERVER

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`)
        const data = await response.json()
        setData(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [siteUrl, serverUrl, slug])

  return (
    <div className="w-full px-4 md:px-10 lg:px-32 xl:px-48 mb-10">
      {data ? (
        data.map((post) => (
          <div key={post.id} className="flex flex-col min-h-screen">
            {/* Uncomment and use Next.js Image if image is needed */}
            {/* <Image
              src={post.acf.desktop_banner_image.url}
              alt={post.title.rendered}
              width={1920}
              height={600}
              className="w-full rounded-xl object-cover"
            /> */}

            <div className="py-10 text-white">
              <div className="flex flex-col justify-between">
                <h5 className="text-2xl font-semibold pb-3" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <div className="flex flex-col">
                  <div
                    className="text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  )
}

export default CaseStudies
