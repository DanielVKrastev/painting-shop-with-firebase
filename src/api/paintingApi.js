const baseUrl = 'https://painting-shop-krasteva-default-rtdb.europe-west1.firebasedatabase.app/paintings';

async function getAll() {
    const response = await fetch(`${baseUrl}.json`);
    
    if(!response.ok){
        return await new Error(response.json());
    }

    const result = await response.json();

    return result;
}

async function getOne(id) {
    const response = await fetch(`${baseUrl}/${id}.json`);

    if(!response.ok){
        return await new Error(response.json());
    }

    const result = await response.json();

    return result;
}

async function getSort(bySort) {
    const response = await fetch(`${baseUrl}.json?orderBy="${bySort}"`);

    if(!response.ok){
        return await new Error(response.json());
    }

    const result = await response.json();

    return result;
}

async function getEqualSort(equalToCategory, equalToSizes) {
    try {
        let fetchUrl = `${baseUrl}.json?`; // Start URL-то
        
        const queryParams = [];
        
        if (equalToCategory) {
            queryParams.push(`orderBy="category"&equalTo="${equalToCategory}"`);
        }

        if (equalToSizes && equalToSizes.length > 0) {
            equalToSizes.forEach(size => {
                queryParams.push(`orderBy="size"&equalTo="${size}"`);
            });
        }

        // If have another parameters add to url
        if (queryParams.length > 0) {
            fetchUrl += queryParams.join('&');
        }

        console.log('Изпратена заявка към:', fetchUrl);

        // Get query
        const response = await fetch(fetchUrl);

        if (!response.ok) {
            return await new Error(response.json());
        }

        const result = await response.json();
        return Object.values(result);
    } catch (error) {
        console.error(error);
        return [];
    }
    
}

async function getPaintingsByCategory(category) {
    const url = `${baseUrl}.json?orderBy="category"&equalTo="${category}"`;
    const response = await fetch(url);
    if(!response.ok){
        return await new Error(response.json());
    }

    const result = await response.json();
    
    return Object.values(result);
}

async function getPaintingsBySize(size) {
    const url = `${baseUrl}.json?orderBy="size"&equalTo="${size}"`;
    const response = await fetch(url);
    if(!response.ok){
        return await new Error(response.json());
    }

    const result = await response.json();
    
    return Object.values(result);
}

async function getCombinedPaintings(equalToCategory, equalToSizes) {
    try {
        let paintingsByCategory = [];
        let paintingsBySize = [];

        // First query for filter category
        if (equalToCategory) {
            paintingsByCategory = await getPaintingsByCategory(equalToCategory);
        }

        // Second query for filter size
        if (equalToSizes) {
            paintingsBySize = await getPaintingsBySize(equalToSizes);
        }

        // Filtering painting
        const filteredPaintings = paintingsByCategory.filter(painting => {
            return paintingsBySize.some(sizePainting => sizePainting.id === painting.id);
        });

        return filteredPaintings;
    } catch (error) {
        console.error('Error fetching paintings:', error);
    }
}




export default{
    getAll,
    getOne,
    getSort,
    getEqualSort,
    getPaintingsByCategory,
    getPaintingsBySize,
    getCombinedPaintings
}