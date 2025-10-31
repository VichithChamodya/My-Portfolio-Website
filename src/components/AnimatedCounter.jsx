import CountUp from 'react-countup';

import { counterItems } from '../constants/index.js';

const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="max-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div className="bg-zinc-900 rounded-lg p-8 flex flex-col justify-center" key={item.label}>
                        <div key={item.label} className="counter-number text-white text-5xl font-bold mb-2">
                            <CountUp
                                suffix={item.suffix}
                                end={item.value}
                                duration={5}
                            />
                        </div>
                        <div className="text-white-50 text-lg">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter