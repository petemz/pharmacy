function Notes ({ note, setNote }) {
    return (
        <div className=" w-full bottom-0 rounded-t-3xl bg-white p-7 pb-16 text-gray-500">
            <div className="mb-8">
                <p className="text-3xl text-[#053F63]">Notes</p>
                <span className="text-lg ">Enter a prescription note</span>
            </div>

            <textarea className="w-full h-32 border-4 resize-none p-3 rounded-xl" name="notes" id="notes" placeholder="Input note"
                      onChange={e => setNote(e.target.value)}  
            >{note}</textarea>
        </div>
    )
}

export default Notes