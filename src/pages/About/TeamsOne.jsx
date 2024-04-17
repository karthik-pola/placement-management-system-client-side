import React from 'react'

export function TeamsOne() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            People who made it successful
          </h2>
          {/* <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis a vel error
            explicabo voluptatum nihil possimus veritatis eos culpa.
          </p> */}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
          <div>
            <img
              className="h-[300px] w-full rounded-md object-cover"
              src=""
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[300px] w-full rounded-md object-cover"
              src="https://cloud-1de12d.b-cdn.net/media/original/d2e7b5d74ad137812204e973b566b8f5/WhatsApp%20Image%202023-06-05%20at%203.11.57%20PM.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-[300px] w-full rounded-md object-cover"
              src="https://cloud-1de12d.b-cdn.net/media/original/d2e7b5d74ad137812204e973b566b8f5/WhatsApp%20Image%202023-06-05%20at%203.11.57%20PM.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-8 text-center md:mt-16">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  )
}