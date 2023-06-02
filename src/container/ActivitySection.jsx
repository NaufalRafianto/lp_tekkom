import Image from 'next/image'
import React from 'react'

export default function ActivitySection({ id }) {
    const image = [
        {
            id: 'career',
            src: 'https://www.its.ac.id/komputer/wp-content/uploads/sites/28/2019/12/RISET_M-MAROQI-ABDUL-JALIL-1-1-768x576.jpg',
            desc: 'Lulusan Departemen Teknik Komputer berpeluang besar untuk bekerja di perusahaan dan berwirausaha.',
            href: 'https://www.its.ac.id/komputer/id/calon-mahasiswa/prospek-karir/',
        },
        {
            id: 'organization',
            src: 'https://www.its.ac.id/komputer/wp-content/uploads/sites/28/2019/12/WhatsApp-Image-2019-12-18-at-08.17.20-768x512.jpeg',
            desc: 'Berorganisasi untuk meningkatkan soft skill mahasiswa Departemen Teknik Komputer.',
            href: 'https://www.its.ac.id/komputer/id/mahasiswa/himpunan-mahasiswa-teknik-komputer/',
        },
        {
            id: 'competition',
            src: 'https://www.its.ac.id/komputer/wp-content/uploads/sites/28/2018/12/WhatsApp-Image-2018-12-09-at-18.32.41-1-768x576.jpeg',
            desc: 'Berorganisasi untuk meningkatkan soft skill mahasiswa Departemen Teknik Komputer.',
            href: 'https://www.its.ac.id/komputer/id/mahasiswa/prestasi-mahasiswa/',
        },
    ]
    return (
        <div id={id} className="min-h-screen w-screen ">
            <div className="relative">
                <div className="mx-auto w-full max-md:-translate-y-20">
                    <div className="relative my-20 text-center font-bold before:absolute before:left-7 before:top-3 before:h-px before:w-1/3 before:bg-cblue after:absolute after:right-7 after:top-3 after:h-px after:w-1/3 after:bg-cblue max-md:my-10 max-md:text-xs max-md:before:left-3 max-md:before:top-2 max-md:before:w-1/12 max-md:after:right-3 max-md:after:top-2 max-md:after:w-1/12">
                        Where imagination thrives, technology excels.
                    </div>
                </div>
                <div>
                    <h1 className=" mb-10 text-center text-5xl  font-bold text-cblue">Our Activity</h1>
                    <div className="card-container max flex justify-center gap-10 max-md:flex-col ">
                        {image.map((item) => {
                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="group relative block h-3/4 w-1/4 rounded-lg bg-cdark shadow max-md:mx-auto max-md:w-11/12"
                                >
                                    <Image
                                        fill
                                        alt={item.id}
                                        src={item.src}
                                        className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                    />
                                    <div className="relative p-4 sm:p-6 lg:p-8">
                                        <p className="text-sm font-medium uppercase tracking-widest text-cyellow">
                                            Activity
                                        </p>

                                        <p className="text-xl font-bold uppercase text-white sm:text-2xl">{item.id}</p>

                                        <div className="mt-32 sm:mt-48 lg:mt-64">
                                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                                <p className="text-sm text-white">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
