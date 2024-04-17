import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './UserTable';
import AdminDashboard from '../../components/AdminDashboard.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
// import UserTable from './UserTable'; // Import the UserTable component
import * as XLSX from 'xlsx';


const DownloadDrivesData = () =>  {
    const [users, setUsers] = useState([]);
    const location = useLocation();
    // const { driveId } = props.location.state;
    const driveId = location.state?.data;
    const name = location.state?.name;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://placement-management-system-mroj.onrender.com/api/v1/drives/registeredBy/${driveId}`);
                setUsers(response.data);

                console.log(response.data)
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    const downloadExcel = () => {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        // const fileName = `user_data ${name}`;

//         const currentDate = new Date();
// const dateString = currentDate.toISOString().slice(0, 10); // Get YYYY-MM-DD format
// const fileName = `user_data_${name}_${dateString}`;

        const currentDate = new Date();
        const date = currentDate.toISOString().slice(0, 10); // Get YYYY-MM-DD format
        const time = currentDate.toLocaleTimeString().replace(/:/g, ':'); // Get HH-MM-SS format
        const fileName = `user_data_${name}_${date}_${time}`;

        const formattedData = users.map(user => ({
            // 'User Name': user.userName,
            'Email': user.email,
            'Full Name': user.fullName,
            // 'Avatar': user.avatar,
            // 'Cover Image': user.coverImage,
            // 'Password': user.password,
            // 'Role': user.role,
            'Personal Email': user.personalEmail,
            'Roll No': user.rollNo,
            'Address': user.address,
            'Gender': user.gender,
            'Course': user.course,
            // 'About': user.about,
            'Department': user.department,
            'Phone No': user.phoneNo,
            '1-1': user.oneOne,
            '1-2': user.oneTwo,
            '2-1': user.twoOne,
            '2-2': user.twoTwo,
            '3-1': user.threeOne,
            '3-2': user.threeTwo,
            '4-1': user.fourOne,
            '4-2': user.fourTwo,
            'Palced': user.palced,
            'Offers': user.offers,
            // 'Created At': user.createdAt,
            // 'Updated At': user.updatedAt,
            // Add more fields as needed
        }));

        const ws = XLSX.utils.json_to_sheet(formattedData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        const url = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName + fileExtension;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        }, 100);
    };

    return (
        // <div>
        //     <h1>User Table</h1>
        //     <UserTable users={users} /> {/* Render the UserTable component and pass the users array as a prop */}
        // </div>

        <AdminDashboard>
        <div className='drives'>
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
              <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div>
                  <h2 className="text-lg font-semibold">Students Applied for  {name} drive</h2>
                  <p className="mt-1 text-sm text-gray-700">
                    {/* This is a list of all employees. You can add new employees, edit or delete existing
                    ones. */}
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={downloadExcel}
                  >
                    download excel
                  </button>
                </div>
              </div>
              <div className="mt-6 flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              <span>Student</span>
                            </th>
                            <th
                              scope="col"
                              className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              RollNo
                            </th>
      
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              Collage Email
                            </th>
      
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              Department
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              course
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              Personal Email
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              Phone Number
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              1-1
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              1-2
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              2-1
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              2-2
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              3-1
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              3-2
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              4-1
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              4-2
                            </th>
                            <th scope="col" className="relative px-4 py-3.5">
                              <span className="sr-only">Edit</span>
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                            >
                              percentage
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {users.map((data) => (
                            <tr key={data._id}>
                              <td className="whitespace-nowrap px-4 py-4">
                                <div className="flex items-center">
                                  <div className="h-10 w-10 flex-shrink-0">
                                    <img
                                      className="h-10 w-10 rounded-full object-cover"
                                      src={data.coverImage}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{data.fullName}</div>
                                    {/* <div className="text-sm text-gray-700">{data.companyName}</div> */}
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-12 py-4">
                                <div className="text-sm text-gray-900 ">{data.rollNo}</div>
                                {/* <div className="text-sm text-gray-700">{data.companyName}</div> */}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4">
                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                  {data.email}
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.department}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.course}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.personalEmail}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.phoneNo}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.oneOne}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.oneTwo}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.twoOne}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.twoTwo}
                              </td>

                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.threeOne}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.threeTwo}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.fourOne}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.fourTwo}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data?.percentage}
                              </td>
                              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.department}
                              </td>
                              

                              {/* <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                <Link 
                                to={"/u2/drives/download"}
                                state = {{ data: data._id }}
                                className="text-gray-700">
                                  click here
                                </Link>
                              </td> */}
                              {/* <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                <Link 
                                to={"/u2/drives/update"}
                                state = {{ data: data._id }}
                                className="text-gray-700">
                                  Edit
                                </Link>
                              </td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        
            {/* <EditDrive close={closeModal} /> */}
            
      
      
      
            </div>
            </AdminDashboard>


    );
}

export default DownloadDrivesData;
