'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
    useEffect(() => {
        // Включаем плавную прокрутку
        document.documentElement.style.scrollBehavior = 'smooth';
        window.scrollTo(0, 0);

        // Опционально: через небольшой таймаут убираем smooth, чтобы не влиять на дальнейший скролл
        const timeoutId = setTimeout(() => {
            document.documentElement.style.scrollBehavior = '';
        }, 500);

        return () => clearTimeout(timeoutId);
    }, []);

    return null;
}