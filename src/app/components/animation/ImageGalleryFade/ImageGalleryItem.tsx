'use client';

import FadeContent from "../FadeContent/FadeContent";

export default function ImageGalleryItem({ image }: { image: string }) {
    return (
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <img
                src={image}
                alt=""
                className="w-full object-cover"
            />
        </FadeContent>
    );
}