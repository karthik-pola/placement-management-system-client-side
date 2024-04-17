// // import React from 'react';

// // class DownloadExcel extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             downloading: false,
// //             driveId: "65ef2f726afc33ff8ff59891"
// //         };
// //     }

// //     handleDownload = async () => {
// //         // Set downloading state to true to indicate that download is in progress
// //         this.setState({ downloading: true });

// //         try {
// //             const response = await fetch('http://localhost:8000/api/v1/drives/registeredBy', {
// //                 method: 'GET', // Assuming your backend endpoint supports GET method
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     // Add any other necessary headers, such as authorization headers
// //                 }
// //             });

// //             // Check if the response is successful
// //             if (!response.ok) {
// //                 throw new Error('Failed to download Excel file');
// //             }

// //             // Convert the response to a blob
// //             const blob = await response.blob();

// //             // Create a temporary URL for the blob
// //             const url = window.URL.createObjectURL(blob);

// //             // Create a link element to trigger the download
// //             const link = document.createElement('a');
// //             link.href = url;
// //             link.setAttribute('download', 'drive_details.xlsx');
// //             document.body.appendChild(link);

// //             // Simulate click on the link to trigger download
// //             link.click();

// //             // Remove the link from the DOM
// //             document.body.removeChild(link);

// //             // Revoke the temporary URL
// //             window.URL.revokeObjectURL(url);

// //             // Reset downloading state
// //             this.setState({ downloading: false });
// //         } catch (error) {
// //             console.error('Error downloading Excel file:', error);
// //             // Handle error, such as displaying an error message to the user
// //             this.setState({ downloading: false });
// //         }
// //     };

// //     render() {
// //         const { downloading } = this.state;

// //         return (
// //             <div>
// //                 <button onClick={this.handleDownload} disabled={downloading}>
// //                     {downloading ? 'Downloading...' : 'Download Excel'}
// //                 </button>
// //             </div>
// //         );
// //     }
// // }

// // export default DownloadExcel;






// import React from 'react';
// import axios from 'axios';

// class DownloadExcel extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             downloading: false,
//             driveId: "65ef2f726afc33ff8ff59891" // Default driveId
//         };
//     }

//     handleDownload = async () => {
//         // Set downloading state to true to indicate that download is in progress
//         this.setState({ downloading: true });

//         try {
//             const response = await axios.get('http://localhost:8000/api/v1/drives/registeredBy', {
//                 // "driveId": this.state.driveId // Send driveId in the request body
//                 "driveId":"65ef2f726afc33ff8ff59891"
//             }, {
//                 responseType: 'blob' // Set responseType to 'blob' to handle binary data
//             });

//             // Create a temporary URL for the blob
//             const url = window.URL.createObjectURL(new Blob([response.data]));

//             // Create a link element to trigger the download
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', 'drive_details.xlsx');
//             document.body.appendChild(link);

//             // Simulate click on the link to trigger download
//             link.click();

//             // Remove the link from the DOM
//             document.body.removeChild(link);

//             // Revoke the temporary URL
//             window.URL.revokeObjectURL(url);

//             // Reset downloading state
//             this.setState({ downloading: false });
//         } catch (error) {
//             console.error('Error downloading Excel file:', error);
//             // Handle error, such as displaying an error message to the user
//             this.setState({ downloading: false });
//         }
//     };

//     render() {
//         const { downloading } = this.state;

//         return (
//             <div>
//                 <button onClick={this.handleDownload} disabled={downloading}>
//                     {downloading ? 'Downloading...' : 'Download Excel'}
//                 </button>
//             </div>
//         );
//     }
// }

// export default DownloadExcel;



import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

class DownloadExcel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            downloading: false,
            driveId: "65ef2f726afc33ff8ff59891" // Default driveId
        };
    }

    handleDownload = async () => {
        // Set downloading state to true to indicate that download is in progress
        this.setState({ downloading: true });

        try {
            const response = await axios.get('https://placement-management-system-mroj.onrender.com/api/v1/drives/registeredBy', {
                driveId:"65ef2f726afc33ff8ff59891"
                 //this.state.driveId // Send driveId in the request body
            }, {
                responseType: 'blob' // Set responseType to 'blob' to handle binary data
            });

            // Save the blob response as a file using FileSaver.js
            saveAs(response.data, 'drive_details.xlsx');

            // Reset downloading state
            this.setState({ downloading: false });
        } catch (error) {
            console.error('Error downloading Excel file:', error);
            // Handle error, such as displaying an error message to the user
            this.setState({ downloading: false });
        }
    };

    render() {
        const { downloading } = this.state;

        return (
            <div>
                <button onClick={this.handleDownload} disabled={downloading}>
                    {downloading ? 'Downloading...' : 'Download Excel'}
                </button>
            </div>
        );
    }
}

export default DownloadExcel;
