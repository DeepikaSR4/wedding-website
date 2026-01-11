'use client';
import { useEffect, useState } from 'react';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<{ days: string, hours: string, minutes: string, seconds: string }>({
        days: '00', hours: '00', minutes: '00', seconds: '00'
    });

    useEffect(() => {
        const weddingDate = new Date(2026, 1, 8, 10, 0, 0).getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance < 0) {
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: String(days).padStart(2, '0'),
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0')
            });
        };

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countdown-timer">
            <div className="time-box">
                <div className="time-value" id="days">{timeLeft.days}</div>
                <div className="time-label">DAYS</div>
            </div>
            <div className="time-box">
                <div className="time-value" id="hours">{timeLeft.hours}</div>
                <div className="time-label">HOURS</div>
            </div>
            <div className="time-box">
                <div className="time-value" id="minutes">{timeLeft.minutes}</div>
                <div className="time-label">MINUTES</div>
            </div>
            <div className="time-box">
                <div className="time-value" id="seconds">{timeLeft.seconds}</div>
                <div className="time-label">SECONDS</div>
            </div>
        </div>
    );
}
