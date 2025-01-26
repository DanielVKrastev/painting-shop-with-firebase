
const baseUrl = 'https://painting-shop-krasteva-default-rtdb.europe-west1.firebasedatabase.app/paintings';

async function getAll() {
    const response = await fetch(`${baseUrl}.json`);
    
    if(!response.ok){
        return await new Error(response.json());
    }

    const result = await response.json();

    return Object.values(result);
}

async function getAllForSales() {
    const response = await fetch(`${baseUrl}.json?orderBy="sold"&equalTo="no"`);
    
    if(!response.ok){
        return await new Error(response.json());
    }

    const result = await response.json();

    return Object.values(result);
}


async function getOne(id) {
    const response = await fetch(`${baseUrl}/${id}.json`);

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
    
    const paintings = await getAllForSales();

    const categorySort = paintings.filter(c=>c.category === category);
    
    return categorySort;
}

async function getPaintingsBySize(size) {

    const paintings = await getAllForSales();
    
    const sizeSort = paintings.filter(s=>s.size == size);
    
    return sizeSort;
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

async function create(data, token) {

    const response = await fetch(`${baseUrl}.json?auth=${token}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    const id = result.name;

    //add Id as row
    await updateData(id, { id: id});
    
    return result;
}


async function updateData(idPainting, data) {
    const response = await fetch(`${baseUrl}/${idPainting}.json`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Грешка: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
}


export default{
    getAll,
    getAllForSales,
    getOne,
    getEqualSort,
    getPaintingsByCategory,
    getPaintingsBySize,
    getCombinedPaintings,
    create,
    updateData
}