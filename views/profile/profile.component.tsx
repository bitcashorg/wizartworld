import { CollectionCard } from '~/components/collection-card'
import { GridGallery } from '~/components/grid-gallery'

import { ProfileProps } from './profile.type'

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] // WIP

export function Profile({}: ProfileProps) {
  return (
    <div className="flex pt-40">
      {/* <!-- Start Hero --> */}
      <section className="relative md:pb-24 pb-16 lg:mt-24 mt-[74px]">
        <div className="lg:container container-fluid">
          <div className="group profile-banner relative overflow-hidden text-transparent lg:rounded-xl shadow dark:shadow-gray-700">
            <input
              id="pro-banner"
              name="profile-banner"
              type="file"
              className="hidden"
            />
            <div className="relative shrink-0">
              <img
                src="assets/images/blog/single.jpg"
                className="h-80 w-full object-cover"
                id="profile-banner"
                alt=""
              />
              <div className="absolute inset-0 bg-slate/10 group-hover:bg-slate-900/40 transition duration-500"></div>
              <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
            </div>
          </div>

          <div className="md:flex justify-center">
            <div className="md:w-full">
              <div className="relative -mt-[60px] text-center">
                <div className="group profile-pic w-[112px] mx-auto">
                  <input
                    id="pro-img"
                    name="profile-image"
                    type="file"
                    className="hidden"
                  />
                  <div>
                    <div className="relative h-28 w-28 mx-auto rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
                      <img
                        src="assets/images/avatar/1.jpg"
                        className="rounded-full"
                        id="profile-image"
                        alt=""
                      />
                      <div className="absolute inset-0 group-hover:bg-slate-900/40 transition duration-500"></div>
                      <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-xl font-semibold">
                    Jenny Jimenez{' '}
                    <i className="mdi mdi-check-decagram text-emerald-600 align-middle text-lg"></i>
                  </h5>
                  <p className="text-slate-400 text-[16px] mt-1">
                    Created by{' '}
                    <a href="" className="text-violet-600 font-semibold">
                      1x5484dcdvcdscds56c4
                    </a>
                  </p>

                  <div className="mt-4">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-plus"></i> Follow me
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                    >
                      <i className="mdi mdi-account-plus"></i>
                    </a>
                    <a
                      href="creator-profile-edit.html"
                      className="btn btn-icon btn-sm rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"
                    >
                      <i className="mdi mdi-cog"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end --> */}

        <div className="container mt-16">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="assets/images/items/1.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />
                </div>

                <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <a
                    href="item-detail.html"
                    className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-lightning-bolt"></i> Buy Now
                  </a>
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-plus"></i>
                  </a>
                </div>
              </div>

              <div className="mt-3">
                <div className="my-3">
                  <a href="item-detail.html" className="font-semibold hover:text-violet-600">
                    Genuine Undead #3902
                  </a>
                </div>

                <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.5 ETH
                    </span>
                  </div>

                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">
                      Highest Bid
                    </span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.55 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end content--> */}

            <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="assets/images/items/2.gif"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />
                </div>

                <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <a
                    href="item-detail.html"
                    className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-lightning-bolt"></i> Buy Now
                  </a>
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-plus"></i>
                  </a>
                </div>

                <div className="absolute bottom-2 right-0 left-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full">
                  <i className="uil uil-clock align-middle mr-1"></i>{' '}
                  <small id="auction-item-1" className="font-bold"></small>
                </div>
              </div>

              <div className="mt-3">
                <div className="my-3">
                  <a href="item-detail.html" className="font-semibold hover:text-violet-600">
                    Windchime #768
                  </a>
                </div>

                <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.5 ETH
                    </span>
                  </div>

                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">
                      Highest Bid
                    </span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.55 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end content--> */}

            <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="assets/images/items/2.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />
                </div>

                <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <a
                    href="item-detail.html"
                    className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-lightning-bolt"></i> Buy Now
                  </a>
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-plus"></i>
                  </a>
                </div>
              </div>

              <div className="mt-3">
                <div className="my-3">
                  <a href="item-detail.html" className="font-semibold hover:text-violet-600">
                    Probably A Label #3277
                  </a>
                </div>

                <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.5 ETH
                    </span>
                  </div>

                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">
                      Highest Bid
                    </span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.55 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end content--> */}

            <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="assets/images/items/3.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />
                </div>

                <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <a
                    href="item-detail.html"
                    className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-lightning-bolt"></i> Buy Now
                  </a>
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-plus"></i>
                  </a>
                </div>
              </div>

              <div className="mt-3">
                <div className="my-3">
                  <a href="item-detail.html" className="font-semibold hover:text-violet-600">
                    Probably A Label #1711
                  </a>
                </div>

                <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.5 ETH
                    </span>
                  </div>

                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">
                      Highest Bid
                    </span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.55 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end content--> */}

            <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="assets/images/items/3.gif"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />
                </div>

                <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <a
                    href="item-detail.html"
                    className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-lightning-bolt"></i> Buy Now
                  </a>
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-plus"></i>
                  </a>
                </div>
              </div>

              <div className="mt-3">
                <div className="my-3">
                  <a href="item-detail.html" className="font-semibold hover:text-violet-600">
                    Shibuya Scramble Punks
                  </a>
                </div>

                <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.5 ETH
                    </span>
                  </div>

                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">
                      Highest Bid
                    </span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.55 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end content--> */}

            <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="assets/images/items/4.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />
                </div>

                <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <a
                    href="item-detail.html"
                    className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-lightning-bolt"></i> Buy Now
                  </a>
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-plus"></i>
                  </a>
                </div>
              </div>

              <div className="mt-3">
                <div className="my-3">
                  <a href="item-detail.html" className="font-semibold hover:text-violet-600">
                    Probably A Label #650
                  </a>
                </div>

                <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.5 ETH
                    </span>
                  </div>

                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">
                      Highest Bid
                    </span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.55 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end content--> */}

            <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="assets/images/items/5.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />
                </div>

                <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <a
                    href="item-detail.html"
                    className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-lightning-bolt"></i> Buy Now
                  </a>
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-plus"></i>
                  </a>
                </div>

                <div className="absolute bottom-2 right-0 left-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full">
                  <i className="uil uil-clock align-middle mr-1"></i>{' '}
                  <small id="auction-item-5" className="font-bold"></small>
                </div>
              </div>

              <div className="mt-3">
                <div className="my-3">
                  <a href="item-detail.html" className="font-semibold hover:text-violet-600">
                    Looki#0147
                  </a>
                </div>

                <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.5 ETH
                    </span>
                  </div>

                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">
                      Highest Bid
                    </span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.55 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end content--> */}

            <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="assets/images/items/6.jpg"
                    className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                    alt=""
                  />
                </div>

                <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                  <a
                    href="item-detail.html"
                    className="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-lightning-bolt"></i> Buy Now
                  </a>
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
                  >
                    <i className="mdi mdi-plus"></i>
                  </a>
                </div>
              </div>

              <div className="mt-3">
                <div className="my-3">
                  <a href="item-detail.html" className="font-semibold hover:text-violet-600">
                    Poob #285
                  </a>
                </div>

                <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.5 ETH
                    </span>
                  </div>

                  <div>
                    <span className="text-[16px] font-medium text-slate-400 block">
                      Highest Bid
                    </span>
                    <span className="text-[16px] font-semibold block">
                      <i className="mdi mdi-ethereum"></i> 3.55 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end content--> */}
          </div>
          {/* <!--end grid--> */}

          <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
              <nav>
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <a
                      href="#"
                      className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      <i className="uil uil-angle-left text-[20px]"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-violet-600 shadow-sm dark:shadow-gray-700"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                    >
                      <i className="uil uil-angle-right text-[20px]"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <!--end grid--> */}
        </div>
        {/* <!--end container--> */}
      </section>
      {/* <!--end section--> */}
      {/* <!-- End --> */}
    </div>
  )
}
