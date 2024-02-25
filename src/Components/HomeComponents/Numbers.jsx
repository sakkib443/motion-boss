import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Numbers = () => {
    return (
        <div>
            <section className="py-4 my-8  bg-gradient-to-r from-blue-50 to-cyan-50  sm:py-8 lg:py-16">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <SectionTitle title={'আমাদের কিছু সংখ্যা'}></SectionTitle>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-2 text-center lg:mt-4 sm:gap-x-8 md:grid-cols-3">
                        <div className="border rounded-2xl p-2">
                            <h3 className="font-bold text-4xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> ৬+ </span>
                            </h3>
                            <p className="mt-1 text-xl font-medium text-gray-900">অনলাইন কোর্স</p>
                            {/* <p className="text-base mt-0.5 text-gray-500">Creating the successful path</p> */}
                        </div>

                        <div className="border rounded-2xl p-2">
                            <h3 className="font-bold text-4xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">  ৪০০০+ </span>
                            </h3>
                            <p className="mt-1 text-xl font-medium text-gray-900">কোর্স স্টুডেন্ট</p>
                            {/* <p className="text-base mt-0.5 text-gray-500">In last 6 years</p> */}
                        </div>

                        <div className="border rounded-2xl p-2">
                            <h3 className="font-bold text-4xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> ৩০০+ </span>
                            </h3>
                            <p className="mt-1 text-xl font-medium text-gray-900">সাকসেস হিস্টরি</p>
                            {/* <p className="text-base mt-0.5 text-gray-500">Working for your success</p> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Numbers;