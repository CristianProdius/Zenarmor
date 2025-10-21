import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {

    const { className, children, ...otherProps} = props;

    return (
        <section className={twMerge("size-14 bg-white inline-flex justify-center items-center rounded-2xl text-xl text-brand-navy font-medium shadow-sm border border-neutral-200", className)} {...otherProps}>
            {children}
        </section>
    )
}