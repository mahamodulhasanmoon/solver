import React from 'react';
import { FiEdit } from 'react-icons/fi';
import UserNav from '../shared/Navbar/UserNav';

const Info = () => {
    return (
        <div className='max-w-[600px] mx-auto  mb-4 '>
          <div className="info bg-white p-3 custom-shadow">

            
                <div className='w-[80%] mx-auto text-right'>
                <UserNav />
                    <span className=  ' inline-flex text-primaryColor hover:bg-bgColor text-lg items-center ml-auto gap-3 px-2  '><FiEdit/> Edit</span>
                </div>
          
           
           {/* information table */}

           <table className='mb-3 w-[80%] mx-auto' >

<tr>
  <td className='w-[35%]'>Full Name</td>
  <td>Full Name</td>

</tr>
<tr>
  <td>Nick Name</td>
  <td>Nick Name</td>

</tr>
<tr>
  <td>Age</td>
  <td>Age</td>

</tr>
<tr>
  <td>Gender</td>
  <td>Gender</td>

</tr>
<tr>
  <td>Occupation</td>
  <td>Occupation</td>

</tr>
<tr>
  <td>Riligion</td>
  <td>Riligion</td>

</tr>
<tr>
  <td>Language</td>
  <td>Language</td>

</tr>
<tr>
  <td>Nationality</td>
  <td>Nationality</td>

</tr>
<tr>
  <td>Description</td>
  <td>Description</td>

</tr>

</table>

{/* description part */}
<form className="description w-[80%] mx-auto">
    <p>Description</p>
    <textarea className='resize-none h-[100px] w-full mt-3 border border-darkShade'></textarea>
</form>



          </div>
        </div>
    );
};

export default Info;