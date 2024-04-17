import React from 'react'

export function ProductTwo() {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src="https://5.imimg.com/data5/WH/DC/QU/SELLER-26865199/crt-brainwiz-500x500.png"
            alt=""
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Campus recruitment training</h1>
            <p className="mt-2 text-sm text-gray-300">
              Campus Recruitment Training Program is a comprehensive training module of 90 Hours, which runs for Third Year engineering students.

            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Know more &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}