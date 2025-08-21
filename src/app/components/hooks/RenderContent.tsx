import React from "react";
export default function RenderContent({ content }: { content: { type: "heading" | "paragraph"; level?: 1 | 2 | 3; value: string }[] }) {
  return (
    <>
      {content.map((block, index) => {
        if (block.type === "heading" && block.level) {
          return React.createElement(
            `h${block.level}`,
            { key: index, className: `text-white font-bold mt-8 mb-4 ${block.level === 1 ? "text-3xl" : block.level === 2 ? "text-2xl" : "text-xl"}` },
            block.value
          );
        }

        if (block.type === "paragraph") {
          return (
            <p
              key={index}
              className="text-justify text-xl  leading-relaxed mb-6"
            >
              {block.value}
            </p>
          );
        }

        return null;
      })}
    </>
  );
}
