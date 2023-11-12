import React, { useState } from 'react';
import { bg, farming } from '../../Assets';

const Farming = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [step, setStep] = useState(1);

    const handleConnectWallet = () => {
        // Add your logic for connecting the wallet here
        setIsConnected(true);
        setStep(2);
    };


    return (
        <div className="flex min-h-screen flex-col justify-center items-center px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-10 bg-no-repeat bg-cover bg-center"

            style={{
                backgroundImage: `url(${bg})`,
            }}>
            <div className="mb-10 sm:text-center md:mb-12">


                <div className="container mx-auto p-4">
                    <div className="space-y-4">

                        {/* Step 1 */}
                        <div className={step === 1 ? '' : 'hidden'}>

                            <div>
                                <div class="p-8 bg-zinc-950/80 shadow-xl shadow-amber-500/100 rounded">

                                    <img
                                        src={farming}
                                        width={500}
                                        height={50}
                                        alt="AiShiba"
                                    />

                                    <div class="mb-4 text-center">
                                        <h2 className="mb-6 py-6 text-3xl font-bold font-grandstander text-white leading-none tracking-tight md:text-6xl md:mx-auto">
                                            $MEMES FARMING
                                        </h2>

                                    </div>
                                    <ul class="mb-8 space-y-2">
                                        <li class="flex items-center">
                                            <div class="mr-3">
                                                <svg
                                                    class="w-4 h-4 text-amber-500"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p class="font-medium text-gray-300">Complete Quests</p>
                                        </li>
                                        <li class="flex items-center">
                                            <div class="mr-3">
                                                <svg
                                                    class="w-4 h-4 text-amber-500"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p class="font-medium text-gray-300">Collect Solmeme Points</p>
                                        </li>
                                        <li class="flex items-center">
                                            <div class="mr-3">
                                                <svg
                                                    class="w-4 h-4 text-amber-500"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p class="font-medium text-gray-300">Harvest $MEMES</p>
                                        </li>
                                    </ul>
                                    <button
                                        className="block py-3 my-7 px-4 font-jost text-center text-xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"
                                        disabled={isConnected}
                                        onClick={handleConnectWallet}
                                    >
                                        {isConnected ? 'Connected' : 'Connect to X'}
                                    </button>
                                    <p className='text-white font-jost'>{isConnected ? '' : 'Receive your first SOLMEME POINTS upon connecting'}</p>
                                </div>
                                <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                                <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                                <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className={step === 2 ? '' : 'hidden'}>
                            <div>
                                <div class="p-8 bg-zinc-950/80 shadow-xl shadow-amber-500/100 rounded">

                                    <div class="mb-4">
                                        <p className='text-white font-jost text-left'>$MEMES Point</p>
                                        <h3 className="mb-6 py-6 text-3xl text-left font-bold font-grandstander text-white leading-none tracking-tight md:text-5xl md:mx-auto">
                                            690 $MEMES
                                        </h3>

                                        <div className='lg:flex gap-4'>
                                            <p className="w-full lg:w-4/12 py-3 my-7 px-4 font-jost text-left text-white text-xl border border-white bg-gradient-to-b from-amber-500/30 to-orange-700/30  active:shadow-none rounded-full shadow ">
                                                Referrals : 35
                                            </p>

                                            <p className="w-full lg:w-4/12 py-3 my-7 px-4 font-jost text-left text-white text-xl border border-white bg-gradient-to-b from-amber-500/30 to-orange-700/30  active:shadow-none rounded-full shadow ">
                                                Sub - Referrals : 135
                                            </p>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <ul class="mb-8 space-y-2">
                                            <li class="flex items-center">
                                                <div class="mr-3">
                                                    <svg
                                                        class="w-4 h-4 text-amber-500"
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeWidth="2"
                                                    >
                                                        <polyline
                                                            fill="none"
                                                            stroke="currentColor"
                                                            points="6,12 10,16 18,8"
                                                        />
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            fill="none"
                                                            r="11"
                                                            stroke="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <p class="font-medium font-jost text-gray-300">Complete Quests</p>
                                            </li>
                                            <li class="flex items-center">
                                                <div class="mr-3">
                                                    <svg
                                                        class="w-4 h-4 text-amber-500"
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeWidth="2"
                                                    >
                                                        <polyline
                                                            fill="none"
                                                            stroke="currentColor"
                                                            points="6,12 10,16 18,8"
                                                        />
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            fill="none"
                                                            r="11"
                                                            stroke="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <p class="font-medium font-jost text-gray-300">Collect Solmeme Points</p>
                                            </li>
                                            <li class="flex items-center">
                                                <div class="mr-3">
                                                    <svg
                                                        class="w-4 h-4 text-amber-500"
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeWidth="2"
                                                    >
                                                        <polyline
                                                            fill="none"
                                                            stroke="currentColor"
                                                            points="6,12 10,16 18,8"
                                                        />
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            fill="none"
                                                            r="11"
                                                            stroke="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <p class="font-medium font-jost text-gray-300">Harvest $MEMES</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-2 sm:mx-auto lg:max-w-full">
                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                300 $MEMES
                                            </p>
                                            <a
                                                href="/"
                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-gray-700 font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="block py-3 my-7 px-4 font-jost text-center text-xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"

                                            >Collect Reward</button>

                                        </div>

                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                300 $MEMES
                                            </p>
                                            <a
                                                href="/"
                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-gray-700 font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="block py-3 my-7 px-4 font-jost text-center text-xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"

                                            >Collect Reward</button>

                                        </div>

                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                300 $MEMES
                                            </p>
                                            <a
                                                href="/"
                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-gray-700 font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="block py-3 my-7 px-4 font-jost text-center text-xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"

                                            >Collect Reward</button>

                                        </div>

                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                300 $MEMES
                                            </p>
                                            <a
                                                href="/"
                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-gray-700 font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="block py-3 my-7 px-4 font-jost text-center text-xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"

                                            >Collect Reward</button>

                                        </div>

                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                300 $MEMES
                                            </p>
                                            <a
                                                href="/"
                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-gray-700 font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="block py-3 my-7 px-4 font-jost text-center text-xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"

                                            >Collect Reward</button>

                                        </div>

                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                300 $MEMES
                                            </p>
                                            <a
                                                href="/"
                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-gray-700 font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="block py-3 my-7 px-4 font-jost text-center text-xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"

                                            >Collect Reward</button>

                                        </div>
                                    </div>
                                </div>
                                <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                                <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                                <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Farming;







