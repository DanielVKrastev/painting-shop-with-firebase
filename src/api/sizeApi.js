const baseUrl = 'https://painting-shop-krasteva-default-rtdb.europe-west1.firebasedatabase.app/size';

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

export default{
    getAll,
    getOne
}