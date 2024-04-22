// import * as React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./styles/ComboBox.module.scss";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/ComboBox/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/ComboBox/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverAnchor
} from "@/components/ui/ComboBox/popover";




export function ComboboxDemo({ categories, currentFilter, setCurrentFilter }: any) {
    const [open, setOpen] = useState<any>(false);

    const handleItem = (currentValue: any) => {
        setCurrentFilter(currentValue === currentFilter.category ? { category: "all" } : { category: currentValue });
        setOpen(false);
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverAnchor className={styles.popoverAnchor} />

            <div className={styles.popOverWrapper}>
                <PopoverTrigger asChild={false} className={styles.popOverTrigger}>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        // className="w-[200px] justify-between" 
                        className={`${styles.categoryButton} ${open ? styles.hideButton : ""}`}
                    >
                        {currentFilter
                            ? currentFilter.category
                            : "All"}
                        <ChevronDown />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className={styles.popoverContent}
                // className= "w-[200px] p-0"
                >
                    <Command className={styles.command} >
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandList className={styles.commandList}  >
                            <CommandGroup className={styles.commandGroup}>
                                {categories.map((item: any, index: any) => (
                                    <CommandItem
                                        key={index}
                                        value={item}
                                        className={`${item === currentFilter.category ? styles.activeItem : styles.allItems}`}
                                        onSelect={(currentValue) => handleItem(currentValue)}
                                    >
                                        {item}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </div>
        </Popover>
    );
}
