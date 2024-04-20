import * as React from "react";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/ComboBox/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/ComboBox/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/ComboBox/popover";




export function ComboboxDemo({ categories, currentFilter, setCurrentFilter }: any) {
    const [open, setOpen] = useState<any>(false);

    const handleItem = (currentValue: any) => {
        setCurrentFilter(currentValue === currentFilter.category ? { category: "all" } : { category: currentValue });
        setOpen(false);
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {currentFilter
                        ? currentFilter.category
                        : "All"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandList>
                        <CommandGroup>
                            {categories.map((item: any, index: any) => (
                                <CommandItem
                                    key={index}
                                    value={item}
                                    onSelect={(currentValue) => handleItem(currentValue)}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            currentFilter.category === item ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {item}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
