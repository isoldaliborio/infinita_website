"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

//Modified from About page accordion component to fit styling requirements of Services page
const ModifiedAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
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
  </AccordionPrimitive.Header>
))
ModifiedAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export { ModifiedAccordionTrigger }

