import './../../index.css';

function AddIncome(props) {
    return (


        <div class="flex flex-row text-base bg-Light2">
            <div class="basis-1/4"></div>
            <div class="basis-1/2 py-6">

                <div class="lg:max-w-full rounded-xl overflow-hidden shadow-lg mx-3 my-6 bg-Light1 border-2 border-dark2">
                    <div class="lg:max-w-full bg-dark1">
                        <center><p class="p-3 text-2xl text-white font-bold">{props.topic}</p></center>
                    </div>

                    <hr class="border-dark2"/>

                    <form class="w-full">
                    <div class="px-6 py-3 pb-6">
                            <div class="items-center border-b border-dark1 py-2">
                                <label class="block uppercase text-gray-700 font-bold mb-2">Amount</label>
                                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" placeholder="Enter Amount" name='amount' value={props.amount}/>
                            </div>
                            <br />
                            <div class="items-center border-b border-dark1 py-2">
                                <label class="block uppercase text-gray-700 font-bold mb-2">Description</label>
                                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Description" name='note' value={props.note}/>
                            </div>
                            <br />
                            <div class="items-center ">
                                <label class="block uppercase text-gray-700 font-bold mb-2">Select Category</label>
                                <div class=" relative">
                                    <select class="block appearance-none w-full bg-white border border-dark1 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='category' value={props.category}>
                                        <option>Select Categoty </option>
                                        <option>Option</option>
                                        <option>Option</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="items-center border-b border-dark1 py-2">         
                                <label class="block uppercase text-gray-700 font-bold mb-2">Date</label>
                                <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="date" placeholder="Enter Description" name='date' value={props.date}/>
                            </div>
                    </div> 

                    <hr class="border-dark2"/>

                    <div class="py-5">
                        <center><input class="flex-shrink-0 bg-dark1 hover:bg-dark2 border-dark1 hover:border-dark2border-4 text-white text-xl py-2 px-6  rounded" type="submit" name={props.btnName} value={props.btnValue}/>
                            
                        </center>
                    </div>
                    
                    </form>
                </div>




            </div>
            <div class="basis-1/4"></div>
        </div>
    );
}

export default AddIncome;