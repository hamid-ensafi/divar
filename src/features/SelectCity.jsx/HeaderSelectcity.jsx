import React from 'react'
import { HiOutlineXMark } from 'react-icons/hi2'
import { SlMagnifier } from 'react-icons/sl'
import Button from '../../ui/Button'

function HeaderSelectCity() {
  return (
    <header className="flex h-2/6 flex-col items-center justify-center gap-6 border-b border-gray_200 p-8">
          <div className="flex w-full justify-between">
            <h3>انتخاب شهر </h3>
            <Button type={"textButton"}> حذف همه </Button>
          </div>
          <div className="flex w-full gap-2">
            <span className="font-700 cursor-default rounded-full border border-Red bg-red_100 p-2 text-xs text-Red transition duration-200">
              <span className="flex items-center justify-center gap-2">
                <span>تهران</span>
                <Button>
                  <HiOutlineXMark />
                </Button>
              </span>
            </span>
          </div>
          <div className="relative flex w-full items-center">
            <input
              className={
                "w-full rounded-md border border-gray_200 bg-transparent p-2 outline-none"
              }
              type="text"
              placeholder="در همه ی شهر ها "
            />
            <span className="absolute left-3">
              <SlMagnifier />
            </span>
          </div>
        </header>
  )
}

export default HeaderSelectCity