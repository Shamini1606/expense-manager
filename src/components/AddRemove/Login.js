import './../../index.css';

function Login(props) {
    return (


        <div class="flex flex-row text-base bg-Light2">
            <div class="basis-1/3"></div>
            <div class="basis-1/3 py-6">

                <div class="lg:max-w-full rounded-xl overflow-hidden shadow-lg mx-3 my-6 bg-Light1 border-2 border-dark2">
                    <div class="lg:max-w-full bg-dark1">
                        <center><p class="p-3 text-2xl text-white font-bold">{props.topic}</p></center>
                    </div>

                    <hr class="border-dark2"/>

                    <form class="w-full">
                    <div class="px-6 py-3 pb-6">
                            <br />
                            <div class="items-center border-b border-dark1 py-2">
                                <label class="block uppercase text-gray-700 font-bold mb-2">Email</label>
                                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" placeholder="Enter email" name='amount' value={props.amount}/>
                            </div>
                            <br />
                            <div class="items-center border-b border-dark1 py-2">
                                <label class="block uppercase text-gray-700 font-bold mb-2">Password</label>
                                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Enter password" name='note' value={props.note}/>
                            </div>
                            <br />
                            <a class='text-dark1 italic underline' href='#'>Don't have an account?</a>
                            <br />
                            
                    </div> 

                    <hr class="border-dark2"/>

                    <div class="py-5">
                        <center><input class="flex-shrink-0 bg-dark1 hover:bg-dark2 border-dark1 hover:border-dark2border-4 text-white text-xl py-2 px-6  rounded" type="submit" name={props.btnName} value={props.btnValue}/></center>
                    </div>
                    
                    </form>
                </div>




            </div>
            <div class="basis-1/3"></div>
        </div>
    );
}

export default Login;