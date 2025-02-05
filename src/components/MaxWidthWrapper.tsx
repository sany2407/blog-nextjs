import React from 'react'
import { cn } from '@/lib/utils';

interface MaxWidthProps {
    className?: string;
    children: React.ReactNode;
}

const maxWidthWrapper = ({className,children}:MaxWidthProps) => {
  return (
    <div className = {cn("mx-auto w-full max-w-screen-xl my-12",className)}>
        {children}
    </div>
  )
}

export default maxWidthWrapper