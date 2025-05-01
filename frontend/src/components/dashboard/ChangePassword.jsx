import React from 'react'

const ChangePassword = () => {
  return (
    <div className="p-4 bg-white">
        <h2 className="text-2xl font-bold text-slate-600">Change Password</h2>
        <form>
            <div className='flex flex-col gap-1 mb-2'>
                <label htmlFor="old_password" className='text-slate-600'>Old Password</label>
                <input type="password" id='old_password' name="old_password" className='border border-slate-300 rounded-md p-2' placeholder='Enter your old password' />
            </div>
            <div className='flex flex-col gap-1 mb-2'>
                <label htmlFor="new_password" className='text-slate-600'>New Password</label>
                <input type="password" id='new_password' name="new_password" className='border border-slate-300 rounded-md p-2' placeholder='Enter your new password' />
            </div>
            
            
            <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="confirm_password" className="text-slate-600">Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_passsword" className="border border-slate-300 rounded-md p-2" placeholder="Enter your confirm password" />
            </div>
            <div>
                <button className="px-8 py-2 bg-green-600 shadow-lg hover:shadow-green-500 text-white rounded-md">Update Password</button>
            </div>
        </form>

    </div>
  )
}

export default ChangePassword