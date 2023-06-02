import { merge } from '@/utils/merge'
import React from 'react'

export default function ActivitySection({ id, className }) {
    return (
        
    <div id={id} className='min-h-screen w-screen'>
      <div id={id} className='min-h-screen w-screen bg-cYellow  p-5'>
        <h1 className=' mb-10 text-center text-3xl font-bold  text-cDark'>Our Activity</h1>
        {/* CAREER CARD */}
        <div className='card-container flex justify-center gap-10'>
          <a
            href='https://www.its.ac.id/komputer/id/calon-mahasiswa/prospek-karir/'
            className='group relative block h-3/4 w-1/4 rounded-lg bg-cDark'
          >
            <img
              alt='CAREER'
              src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
              className='absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50'
            />

            <div className='relative p-4 sm:p-6 lg:p-8'>
              <p className='text-sm font-medium uppercase tracking-widest text-cYellow'>Activity</p>

              <p className='text-xl font-bold uppercase text-white sm:text-2xl'>CAREER</p>

              <div className='mt-32 sm:mt-48 lg:mt-64'>
                <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
                  <p className='text-sm text-white'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam
                    quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          {/* organization CARD */}
          <a
            href='https://www.its.ac.id/komputer/id/mahasiswa/himpunan-mahasiswa-teknik-komputer/'
            className='group relative block h-3/4 w-1/4 rounded-lg bg-cDark'
          >
            <img
              alt='CAREER'
              src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
              className='absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50'
            />

            <div className='relative p-4 sm:p-6 lg:p-8'>
              <p className='text-sm font-medium uppercase tracking-widest text-cYellow'>Activity</p>

              <p className='text-xl font-bold uppercase text-white sm:text-2xl'>organization</p>

              <div className='mt-32 sm:mt-48 lg:mt-64'>
                <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
                  <p className='text-sm text-white'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam
                    quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
          {/* competition CARD */}
          <a
            href='https://www.its.ac.id/komputer/id/mahasiswa/prestasi-mahasiswa/'
            className='group relative block h-3/4 w-1/4 rounded-lg bg-cDark'
          >
            <img
              alt='CAREER'
              src='https://images.unsplash.com/photo-1621701582507-4e580f0c84f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
              className='absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50'
            />

            <div className='relative p-4 sm:p-6 lg:p-8'>
              <p className='text-sm font-medium uppercase tracking-widest text-cYellow'>Activity</p>

              <p className='text-xl font-bold uppercase text-white sm:text-2xl'>competition</p>

              <div className='mt-32 sm:mt-48 lg:mt-64'>
                <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
                  <p className='text-sm text-white'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam
                    quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  
    )
}
