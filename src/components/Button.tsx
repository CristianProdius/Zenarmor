import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes  = cva('border h-8 md:h-12 px-6 rounded-full font-medium transition-colors', {
    variants: {
        variant: {
            primary: 'bg-[#F98800] text-white border-[#F98800] hover:bg-[#E07A00]',
            secondary: 'border-[#020045] text-[#020045] bg-transparent hover:bg-[#020045] hover:text-white',
        },
        size: {
            sm: 'h-10',
        }
    },
});

export default function Button (props: {variant: "primary" | "secondary"; size?: 'sm'; } & ButtonHTMLAttributes<HTMLButtonElement>) {

    const {variant, className, size, ...otherProps} = props;

    return (
        <button className={classes({ variant, className, size })} {...otherProps} />
    )
}