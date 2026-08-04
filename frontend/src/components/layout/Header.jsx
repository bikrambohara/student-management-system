import React from 'react'
import { Bell, Menu, Search, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className = "sticky top-0 z-30 flex h-23 items-center justify-between border-b border-slate-200 px-4 md:px-6 bg-gray-200">
      <div className ="flex items-center gap-4">
        <button className="rounded-lg p-2 text-slate-900 hover:bg-cyan-600">
          <Menu size={32} />
        </button>

        <div className = "w-120 items-center gap-3 rounded-2xl border-2 border-slate-500 bg-slate-400 px-4 py-3 md:flex">
          <Search size={25} className="text-slate-800" />

          <input type="text"
          placeholder ="Search students, teachers, courses..."
          className = "w-full  text-sm font-semibold text-[16px] outline-none " />
        </div>
      </div>

      <div className='flex items-center gap-5'>
        <button className='relative text-slate-800'>
          <Bell size={26} />
          <span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-[12px]'>5</span>
        </button>

        <div className ="flex items-center gap-3">
          <img src="https://i.pravatar.cc/100?img=12" 
          alt="Admin"
          className ="h-18 w-18 rounded-full object-cover"/>

          <div className ="hidden sm:block">
            <p className='text-[14px] font-semibold text-slate-800'>Admin</p>
            <p className='text-[14px] text-slate-500'>Super Admin</p>
          </div>
          <ChevronDown size={17} className="text-slate-500" />
        </div>
      </div>
    </div>
  )
}

export default Header

