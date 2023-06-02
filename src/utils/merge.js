import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const merge = (...classes) => {
    return twMerge(clsx(...classes))
}
