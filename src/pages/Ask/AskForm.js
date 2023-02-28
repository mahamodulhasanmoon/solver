import React from 'react';
import ShowCaseFooter from '../shared/ShowcaseLayout/ShowCaseFooter';


const AskForm = () => {
    return (
        <div className="bg-white relative h-[80vh] w-[600px] mx-auto custom-shadow overflow-scroll my-5">
        <div className="min-h-[70vh]">
           
           {/* header  */}
           <div className="header sticky top-0 z-50 bg-white flex justify-between px-3 py-4 custom-shadow ">
        <h2 className="text-primaryColor text-center w-full ">How To Ask</h2>

      </div>
      {/* form */}
<form className='p-3 '>

<div>
<label htmlFor="Category">Category</label> <br />
<input className='w-full mt-2 border-t border-top focus:outline-none' type="text" name='category ' placeholder='Type your “ask” category 1 to 3 word'/>
</div>

<div className='mt-4'>
<label htmlFor="Title">Title</label> <br />
<input className='w-full mt-2 border-t border-top focus:outline-none' type="text" name='Title ' placeholder='Type your “ask” category 1 to 3 word'/>
</div>

<div className='mt-4'>
<label htmlFor="Title">Details</label> <br />
<textarea className='w-full h-[100px] mt-2 border-t border-top focus:outline-none '  name='Title ' placeholder='( Optional )Type details with attachment. You can submit
question without this option.'/>
</div>


</form>
          
        </div>



        <ShowCaseFooter />
      </div>
    );
};

export default AskForm;