const SearchBar = ({keyword, onChange}) => {;
    return (
        <div className="w-full">
            <input 
                className="w-full focus:outline-none bg-gray-100 h-14 resize-none p-4 pl-8 rounded-xl"
                value={keyword}
                onChange={(e) => onChange(e.target.value)}
                placeholder={'Search Products'}
            />
        </div>
    );
}
  
export default SearchBar;