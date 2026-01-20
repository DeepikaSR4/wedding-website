'use client';
import './LotusDecorations.css';

export default function LotusDecorations() {
    // Desktop: More flowers, fewer buds - starting from top
    const desktopLotus = [
        // Left side - starting from top
        { type: 'flower', top: '0%', left: '3%', size: 65, animation: 'float-slow' },
        { type: 'flower', top: '8%', left: '5%', size: 85, animation: 'rotate-float' },
        { type: 'bud', top: '18%', left: '4%', size: 70, animation: 'fade-float' },
        { type: 'flower', top: '30%', left: '6%', size: 90, animation: 'float-medium' },
        { type: 'flower', top: '42%', left: '5%', size: 75, animation: 'float-slow' },
        { type: 'flower', top: '55%', left: '4%', size: 80, animation: 'rotate-float' },
        { type: 'bud', top: '68%', left: '6%', size: 70, animation: 'fade-float' },
        { type: 'flower', top: '80%', left: '5%', size: 75, animation: 'float-medium' },

        // Left-center - starting from top
        { type: 'flower', top: '2%', left: '18%', size: 75, animation: 'float-medium' },
        { type: 'flower', top: '14%', left: '20%', size: 65, animation: 'rotate-float' },
        { type: 'flower', top: '28%', left: '19%', size: 85, animation: 'fade-float' },
        { type: 'bud', top: '40%', left: '21%', size: 70, animation: 'float-slow' },
        { type: 'flower', top: '52%', left: '18%', size: 80, animation: 'float-medium' },
        { type: 'flower', top: '65%', left: '20%', size: 65, animation: 'rotate-float' },
        { type: 'flower', top: '78%', left: '19%', size: 75, animation: 'fade-float' },

        // Center - starting from top
        { type: 'flower', top: '4%', left: '47%', size: 60, animation: 'fade-float' },
        { type: 'flower', top: '20%', left: '48%', size: 75, animation: 'float-slow' },
        { type: 'bud', top: '36%', left: '46%', size: 65, animation: 'rotate-float' },
        { type: 'flower', top: '52%', left: '49%', size: 70, animation: 'fade-float' },
        { type: 'flower', top: '70%', left: '47%', size: 60, animation: 'float-medium' },

        // Right-center - starting from top
        { type: 'flower', top: '6%', right: '18%', size: 80, animation: 'float-medium' },
        { type: 'flower', top: '18%', right: '20%', size: 70, animation: 'fade-float' },
        { type: 'flower', top: '32%', right: '19%', size: 85, animation: 'rotate-float' },
        { type: 'bud', top: '46%', right: '21%', size: 65, animation: 'float-slow' },
        { type: 'flower', top: '60%', right: '18%', size: 75, animation: 'float-medium' },
        { type: 'flower', top: '75%', right: '20%', size: 70, animation: 'fade-float' },

        // Right side - starting from top
        { type: 'flower', top: '1%', right: '4%', size: 85, animation: 'rotate-float' },
        { type: 'flower', top: '12%', right: '6%', size: 65, animation: 'float-slow' },
        { type: 'flower', top: '24%', right: '5%', size: 90, animation: 'fade-float' },
        { type: 'bud', top: '38%', right: '7%', size: 70, animation: 'float-medium' },
        { type: 'flower', top: '50%', right: '5%', size: 80, animation: 'rotate-float' },
        { type: 'flower', top: '63%', right: '6%', size: 65, animation: 'fade-float' },
        { type: 'flower', top: '77%', right: '4%', size: 75, animation: 'float-slow' },
    ];

    // Mobile: Increased frequency - 14 elements
    const mobileLotus = [
        { type: 'flower', top: '2%', left: '2%', size: 38, animation: 'float-slow' },
        { type: 'flower', top: '8%', right: '3%', size: 42, animation: 'rotate-float' },
        { type: 'flower', top: '15%', left: '5%', size: 40, animation: 'fade-float' },
        { type: 'bud', top: '22%', right: '4%', size: 38, animation: 'float-medium' },
        { type: 'flower', top: '30%', left: '3%', size: 45, animation: 'float-slow' },
        { type: 'flower', top: '38%', right: '5%', size: 42, animation: 'rotate-float' },
        { type: 'flower', top: '46%', left: '4%', size: 38, animation: 'fade-float' },
        { type: 'bud', top: '54%', right: '2%', size: 40, animation: 'float-medium' },
        { type: 'flower', top: '62%', left: '3%', size: 42, animation: 'float-slow' },
        { type: 'flower', top: '68%', right: '4%', size: 45, animation: 'rotate-float' },
        { type: 'bud', top: '74%', left: '5%', size: 38, animation: 'fade-float' },
        { type: 'flower', top: '80%', right: '3%', size: 40, animation: 'float-medium' },
        { type: 'flower', top: '86%', left: '2%', size: 42, animation: 'float-slow' },
        { type: 'flower', top: '92%', right: '4%', size: 38, animation: 'rotate-float' },
    ];

    return (
        <>
            {/* Desktop lotus */}
            <div className="lotus-decorations desktop-lotus">
                {desktopLotus.map((lotus, index) => {
                    const style: React.CSSProperties = {
                        position: 'absolute',
                        top: lotus.top,
                        ...(lotus.left ? { left: lotus.left } : { right: lotus.right }),
                        width: `${lotus.size}px`,
                        height: 'auto',
                        opacity: 0.4,
                        pointerEvents: 'none' as const,
                        zIndex: 5,
                    };

                    return (
                        <img
                            key={`desktop-${index}`}
                            src={lotus.type === 'bud' ? '/lotus-bud.png' : '/lotus-flower.png'}
                            alt=""
                            style={style}
                            className={`lotus-element ${lotus.animation}`}
                        />
                    );
                })}
            </div>

            {/* Mobile lotus */}
            <div className="lotus-decorations mobile-lotus">
                {mobileLotus.map((lotus, index) => {
                    const style: React.CSSProperties = {
                        position: 'absolute',
                        top: lotus.top,
                        ...(lotus.left ? { left: lotus.left } : { right: lotus.right }),
                        width: `${lotus.size}px`,
                        height: 'auto',
                        opacity: 0.35,
                        pointerEvents: 'none' as const,
                        zIndex: 5,
                    };

                    return (
                        <img
                            key={`mobile-${index}`}
                            src={lotus.type === 'bud' ? '/lotus-bud.png' : '/lotus-flower.png'}
                            alt=""
                            style={style}
                            className={`lotus-element ${lotus.animation}`}
                        />
                    );
                })}
            </div>
        </>
    );
}
