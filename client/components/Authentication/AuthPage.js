const AuthPage = () => {
    return (
        <section className="mt-36">
            <div className="mx-auto p-12 w-[700px] bg-[#b7d6fc] shadow-xl rounded-md">
                <div>
                    <h2 className="text-lg font-semibold ">Welcome</h2>
                    <h2 className="text-lg font-thin">Already have a account? <span className="text-blue-500">Log in</span></h2>
                </div>
                <div className="w-full mt-3">
                    <input type="text" className="p-4 rounded-md w-full placeholder:text-gray-500 mt-2" placeholder="First Name" />
                    <input type="text" className="p-4 rounded-md w-full placeholder:text-gray-500 mt-2" placeholder="Last Name" />
                    <input type="text" className="p-4 rounded-md w-full placeholder:text-gray-500 mt-2" placeholder="Email " />
                    <input type="text" className="p-4 rounded-md w-full placeholder:text-gray-500 mt-2" placeholder="Password" />
                    <input type="text" className="p-4 rounded-md w-full placeholder:text-gray-500 mt-2" placeholder="Confirm Password" />
                    

                </div>
            </div>
        </section>
    )
}

export default AuthPage