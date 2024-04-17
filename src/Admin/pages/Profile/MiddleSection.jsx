import React from 'react'
import Row from './Row'

const people = [
    {
      name: 'John Doe',
      title: 'Front-end Developer',
      department: 'Engineering',
      email: 'john@devui.com',
      role: 'Developer',
      image:
        'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    {
      name: 'Jane Do',
      title: 'Back-end Developer',
      department: 'Engineering',
      email: 'jane@devui.com',
      role: 'CTO',
      image:
        'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
  ]



const MiddleSection = ({data}) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {/* {people.map((person) => ( */}
                      <Row data={data}/>
                    {/*  ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MiddleSection
