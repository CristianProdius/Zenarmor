import Tag from "@/components/Tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <section className="py-16 lg:py-28">
            <div className="container">
                <div className="justify-center flex">
                    <Tag className="mb-4">Introducing Layers</Tag>
                </div>
                <div className="text-center text-4xl md:text-6xl lg:text-7xl font-medium mt-8">
                    <span>Your creative process deserves better.</span>{" "}
                    <span className="text-white/15">{text}</span>
                    <span className="text-lime-400 block">Thats why we built Layers.</span>
                </div>
            </div>
        </section>
    )
}
