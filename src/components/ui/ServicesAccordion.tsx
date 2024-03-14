'use client';

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { PlusIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

//Tailwind CSS has been modified to remove padding that was stopping Image from being displayed correctly, and removed down icon to replace with plus
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
//   <AccordionPrimitive.Header className="flex relative [&[data-state=open]>svg]:animate-hide-icon">
  <AccordionPrimitive.Header className="flex relative">
    
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "items-center justify-between text-sm font-medium transition-all hover:underline  border-solid border-red-600 border-1",
        className
      )}
      {...props}
    >
      {children}
    
    </AccordionPrimitive.Trigger>
    {/* <PlusIcon className="h-6 w-6 absolute shrink-0  mr-4 right-0 z-10 transition-all duration-300 group-data-[state=open]:animate-hide-icon text-white" /> */}
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export { AccordionTrigger };