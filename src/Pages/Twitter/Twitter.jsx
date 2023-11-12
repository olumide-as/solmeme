import React, { useState } from 'react';

const Twitter = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [twitterId, setTwitterId] = useState('');
    const [step, setStep] = useState(1);

    const handleConnectWallet = () => {
        // Add your logic for connecting the wallet here
        setIsConnected(true);
        setStep(2);
    };

    const handleSubmitTwitterId = (e) => {
        e.preventDefault();
        // Add your logic for handling the Twitter ID form submission here
        console.log(twitterId);
        setStep(3);
    };

    const handleClaimAirdrop = () => {
        // Add your logic for handling the airdrop claim here
        setStep(4);
    };

    const handleThankYou = () => {
        // Handle any necessary actions after the "Thank you" step (Step 5) here
        setStep(5);
    };

    return (
        <div className="flex min-h-screen flex-col justify-center items-center px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-10 bg-no-repeat bg-cover bg-center"
        >
            <div className="mb-10 sm:text-center md:mb-12">


                <div className="container mx-auto p-4">
                    <div className="space-y-4">

                        {/* Step 1 */}
                        <div className={step === 1 ? '' : 'hidden'}>
                            <h2 className="mb-6 text-3xl font-bold font-grandstander text-white leading-none tracking-tight md:text-6xl md:mx-auto">
                                {isConnected ? 'Please Claim Airdrop' : 'Please Log in and Continue'}
                            </h2>
                            <button
                                className="block py-3 my-7 px-4 font-jost text-center text-xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"
                                disabled={isConnected}
                                onClick={handleConnectWallet}
                            >
                                {isConnected ? 'Connected' : 'Connect Wallet'}
                            </button>
                        </div>

                        {/* Step 2 */}
                        <div className={step === 2 ? '' : 'hidden'}>
                            <h2 className="mb-6 text-3xl text-white font-grandstander font-bold leading-none tracking-tight md:text-6xl md:mx-auto">
                                Verify your Account
                            </h2>
                            <form>
                                <div className="space-y-2 flex flex-col">
                                    <label htmlFor="Label" className='font-bold'>Input your Twitter ID</label>
                                    <input
                                        required
                                        type="text"
                                        id="twitterId"
                                        name="twitterId"
                                        placeholder='@example'
                                        className="input-gray-500 font-jost text-black border border-gray-300 px-4 py-2 rounded focus:ring focus:ring-blue-200 focus:border-blue-500"
                                        value={twitterId}
                                        onChange={(e) => setTwitterId(e.target.value)}
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="block py-3 my-7 px-4 font-jost text-center text-xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"
                                    disabled={!isConnected}
                                    onClick={handleSubmitTwitterId}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Step 3 */}
                        <div className={step === 3 ? '' : 'hidden'}>


                            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                                <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                                    <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                                        <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                                    </div>
                                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-2xl font-bold font-grandstander leading-5">Twitter Follow</p>
                                            <p className=" flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                                                Task 1
                                            </p>
                                        </div>
                                        <p className=" text-gray-900">
                                            Follow us on Twitter
                                            <br></br>
                                            <a href='https://twitter.com/solmeme_'>@solmeme_</a>
                                        </p>
                                    </div>
                                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-2xl font-bold font-grandstander leading-5">Retweet</p>
                                            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                                               Task 2
                                            </p>
                                        </div>
                                        <p className=" text-gray-900">
                                            Retweet and share our latest post.
                                        </p>
                                    </div>
                                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-2xl font-bold font-grandstander leading-5">Like</p>
                                            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                                                Task 3
                                            </p>
                                        </div>
                                        <p className=" text-gray-900">
                                            Give us a like on our post
                                        </p>
                                    </div>
                                    <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-2xl font-bold font-grandstander leading-5">Comment</p>
                                            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                                                Task 4
                                            </p>
                                        </div>
                                        <p className=" text-gray-900">
                                            Comment and invite your at least 3 friends
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-300 max-w-xl text-xl  leading-relaxed sm:mx-auto font-jost">
              All done? verify your submission on the next page
            </p>
                                <button
                                className="block py-3 my-7 px-4 font-jost text-center text-xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"
                                onClick={handleClaimAirdrop}
                            >
                                Continue
                            </button>
                            </div>



                        </div>

                        {/* Step 4 */}
                        <div className={step === 4 ? '' : 'hidden'}>
                        <h2 className="mb-6 text-3xl text-white font-grandstander font-bold leading-none tracking-tight md:text-6xl md:mx-auto">
                                Completed the Task?
                            </h2>
                            <p className="text-lg">Paste your comment link below</p>
                            <form onSubmit={handleThankYou}>
                                <div className="space-y-2 flex flex-col">
                                    <textarea
                                        required
                                        type="text"
                                        id="twitterId"
                                        name="twitterId"
                                        placeholder='submit your quote link'
                                        className="input-gray-500 font-jost text-black border border-gray-300 px-4 py-2 rounded focus:ring focus:ring-blue-200 focus:border-blue-500"
                                        value={twitterId}
                                        onChange={(e) => setTwitterId(e.target.value)}
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="block py-3 my-7 px-4 font-jost text-center text-xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"
                                    disabled={!isConnected}
                                >
                                    Verify your task
                                </button>
                            </form>
                        </div>

                        {/* Step 5 - Thank You */}
                        <div className={step === 5 ? '' : 'hidden'}>
                        <h2 className="mb-6 text-3xl text-white font-grandstander font-bold leading-none tracking-tight md:text-6xl md:mx-auto">
                                Thank You
                            </h2>
                            <p className="text-lg text-white">You have successfully claimed the airdrop.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Twitter;
