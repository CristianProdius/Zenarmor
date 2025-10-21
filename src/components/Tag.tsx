import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface TagProps extends HTMLAttributes<HTMLDivElement> {
    section?: "faq" | "features" | "integration" | "introducing"; 
}

const pageStyles: Record<NonNullable<TagProps["section"]>, string> = {
    faq: "tracking-wider text-brand-mustard",
    features: "tracking-normal text-brand-mustard",
    integration: "tracking-normal text-brand-mustard",
    introducing: "tracking-normal text-brand-mustard",
};

const Tag = ({ section, className, children, ...otherProps }: TagProps) => {
    return (
        <div
            className={twMerge(
                clsx(
                    "inline-flex border gap-2 px-3 py-1 rounded-full uppercase items-center",
                    "border-brand-mustard bg-orange-50",
                    section ? pageStyles[section] : "text-brand-mustard"
                ),
                className
            )}
            {...otherProps}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
};

Tag.displayName = "Tag";
export default Tag;
