import React from 'react'

const Row = ({data}) => {
  return (
    <>
    <div>
      <tr key={data.userName}>
            <td className="whitespace-nowrap px-4 py-4">
              <div className="flex items-center">
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">Email</div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-12 py-4">
                <div className="text-sm text-gray-900 ">{data.email}</div>
            </td>
        </tr>
    </div>
<div>
<tr key={data.userName}>
      <td className="whitespace-nowrap px-4 py-4">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Gender </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4">
          <div className="text-sm text-gray-900 ">{data.gender}</div>
      </td>
  </tr>
</div>
<div>
<tr key={data.userName}>
      <td className="whitespace-nowrap px-4 py-4">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Department </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4">
          <div className="text-sm text-gray-900 ">{data.department}</div>
      </td>
  </tr>
</div>

<div>
<tr key={data.userName}>
      <td className="whitespace-nowrap px-4 py-4">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">Phone Number </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4">
          <div className="text-sm text-gray-900 ">{data.phoneNumber}</div>
      </td>
  </tr>
</div>

</>
  )
}

export default Row
