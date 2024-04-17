import React from 'react'

const HeaderSection = ({data}) => {
  return (
    <section className="px-2 py-10 md:px-0 bg-slate-500 rounded-t-2xl">
    <div className="mx-auto max-w-4xl">
      <div className="md:flex md:items-center md:justify-center md:space-x-14 sm:flex sm:column space-x-10 sm:items-center">
        <div className="relative h-48 w-48 flex-shrink-0 ">
          <img
            className="relative h-48 w-48 rounded-full object-cover "
            src={data.avatar}
            alt=""
          />
        </div>

        <div className="mt-10 md:mt-0">
          <blockquote>
            <p className="text-xl text-[#f1f5f9]">
              {/* “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam repellat
              laborum minima tempore deserunt explicabo placeat! Fugit, molestias nesciunt.” */}
            </p>
          </blockquote>
          <p className="mt-7 text-lg  text-[#f1f5f9]">{data.username}</p>
          <p className="mt-1 text-base text-[#f1f5f9]">{data?.role}</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeaderSection
