'use client';
import './HangingLamps.css';

export default function HangingLamps() {
    const lamps = [
        // Left edge - full length, shifted more left (desktop + mobile)
        { left: '-2%', height: '140%', opacity: 0.2, class: 'lamp-both' },

        // Left-center - irregular (shorter) (desktop only)
        { left: '10%', height: '100%', opacity: 0.2, class: 'lamp-desktop' },
    ];

    return (
        <div className="hanging-lamps">
            {lamps.map((lamp, index) => {
                const style: React.CSSProperties = {
                    position: 'absolute',
                    top: 0,
                    left: lamp.left,
                    height: lamp.height,
                    width: 'auto',
                    opacity: lamp.opacity,
                    pointerEvents: 'none' as const,
                    zIndex: 4,
                    transformOrigin: 'top center',
                };

                return (
                    <img
                        key={index}
                        src="/hanging-lamp.png"
                        alt=""
                        style={style}
                        className={`lamp-element ${lamp.class}`}
                    />
                );
            })}
        </div>
    );
}
