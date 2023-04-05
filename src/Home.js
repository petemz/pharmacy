import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

import { Link, useHistory } from 'react-router-dom';

function Page ({ drugs }) {
    const navigate = useHistory(); // Add this line

    const breakpoints ={
        default:3,
        700:2
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

    return(
        <div className='px-2'>
            <div className="flex text-[#425b84] text-sm mb-7 overflow-x-scroll scrollbar-hide">
                {categories.map((category, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 mr-5 rounded-xl bg-gray-100 whitespace-nowrap last:mr-0'
                    ${selectedCategories.includes(category) ? 'bg-red-400 text-white' : 'bg-gray-100 text-[#425b84]'}`
                    }
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
                ))}
            </div>
        

            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {filteredDrugs.map((drug, index) => {
                    const isFirstItem = index === 0;

                    return (
                        <Link to={`/${drug.name}`}>
                            <div 
                                key={drug.name} 
                                style={{ backgroundColor: drug.color }} 
                                className={`w-44 ${isFirstItem ? "h-48 pt-8" : "h-64 items-center"} mb-6 rounded-3xl relative flex justify-center text-[#053F63]`}
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
    )
}

export default Page