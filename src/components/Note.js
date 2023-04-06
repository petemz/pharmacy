function Notes ({ note, setNote, closeTab }) {
    return (
        <div className="p-7 pb-14 text-gray-500">
            <div className="mb-8">
                <p className="text-3xl text-[#053F63]">Notes</p>
                <span className="text-lg ">Enter a prescription note</span>
            </div>

            <textarea 
                className="w-full h-32 border-4 resize-none p-3 rounded-xl" name="notes" id="notes" placeholder="Input note"
                onChange={e => setNote(e.target.value)}  
            >
                {note}
            </textarea>

            <button 
                className="bg-blue-500 rounded-xl text-white mt-8 px-8 h-14 flex m-auto justify-center items-center text-xl font-semibold"
                onClick={closeTab}    
            >
                <span>DONE</span>
            </button>
        </div>
    )
}

export default Notes