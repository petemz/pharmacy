import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import SearchBar from './components/SearchBar';

import { Link, useHistory } from 'react-router-dom';

function Page ({ drugs }) {
    const navigate = useHistory();
    //const [overlay, setOverlay] = useState(true);

    const breakpoints ={
        default:3,
        630:2
    }
    
    const categories = ["All", ...new Set(drugs.map(drug => drug.category))];
    const [selectedCategories, setSelectedCategories] = useState(["All"]);

    const handleCategoryClick = (category) => {
        if (category !== "All" && selectedCategories.includes("All")) {
            setSelectedCategories([category]);
        } else {
            if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
            } else {
            setSelectedCategories([...selectedCategories, category]);
            }
        }
    };

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setSelectedCategories(["All"]);
        }
    }, [selectedCategories]);

    const filteredDrugs = selectedCategories.includes("All")
        ? drugs
        : drugs.filter(drug => selectedCategories.includes(drug.category));

    const [keyword, setKeyword] = useState('');
    const updateKeyword = (keyword) => {
        //const filtered = filteredDrugs.filter(temp => {
        //return `${temp.name.toLowerCase()}`.includes(keyword.toLowerCase());
        //})
        setKeyword(keyword);
        //setRenderedTemplates(filtered);
    }

    return(
        <div className='border py-6 max-sm:w-[410px] w-[610px] h-max shadow-lg relative'>
            <div>
            <div>
                <div className="px-4 mb-5 flex">

                    <div className='w-full'>
                        <SearchBar keyword={keyword} onChange={updateKeyword}/>
                    </div>
                    

                    <div className='p-4 ml-6 rounded-xl bg-[#E7F1FF]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.75" height="22.5" viewBox="0 0 27.75 22.5">
                            <path id="Icon_material-format-list-bulleted" data-name="Icon material-format-list-bulleted" d="M6,15.75A2.25,2.25,0,1,0,8.25,18,2.247,2.247,0,0,0,6,15.75Zm0-9A2.25,2.25,0,1,0,8.25,9,2.247,2.247,0,0,0,6,6.75Zm0,18A2.25,2.25,0,1,0,8.25,27,2.257,2.257,0,0,0,6,24.75Zm4.5,3.75h21v-3h-21Zm0-9h21v-3h-21Zm0-12v3h21v-3Z" transform="translate(-3.75 -6.75)" fill="#1374fc"/>
                        </svg>
                    </div>
                </div> 
                
                <div className="flex w-full pl-4 text-[#425b84] text-sm mb-7 overflow-x-scroll scrollbar-hide">
                    {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`px-5 py-3 mr-4 rounded-xl bg-gray-100 whitespace-nowrap last:mr-0'
                        ${selectedCategories.includes(category) ? 'bg-red-400 text-white' : 'bg-gray-100 text-[#425b84]'}`
                        }
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                    ))}
                </div>
            </div>    

            
        

            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid px-4"
                columnClassName="my-masonry-grid_column"
            >
                {filteredDrugs.map((drug, index) => {
                    return (
                        <Link to={`/${drug.name}`}>
                            <div 
                                key={drug.name} 
                                style={{ backgroundColor: drug.color }} 
                                className={`w-44 ${drug.mid ? "h-48 pt-8" : "h-64 items-center"} mb-6 rounded-3xl relative flex justify-center text-[#053F63] transition-shadow hover:shadow-lg`}
                                onClick={() => navigate(`/drug/${drug.name}`)} // Add this line
                            >
                                <div>
                                    {drug.img.sm}
                                </div>

                                <div className='absolute bottom-6 left-6'>
                                    <h3 className='text-sm font-semibold'>{drug.name}</h3>
                                    <p className='text-xs'>{drug.dosage + 'mg'}</p>
                                </div>
                            </div>
                        </Link>
                        )    
                    })
                }
            </Masonry>
            </div>
            
            <div className="">
                {/*overlay && 
                    //classes "max-sm:w-[410px] w-[610px]" because of overflow on the right side. Note- it only overflows on absolute"
                    <div className="max-sm:w-[410px] w-[610px] h-64 top-0 absolute z-50 rounded-t-3xl bg-white">
                        <p>ppppppppppp</p>
                    </div>
            */}
            </div>
        </div>
    )
}

export default Page