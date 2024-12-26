const baseUrl = 'https://painting-shop-krasteva-default-rtdb.europe-west1.firebasedatabase.app/paintings';

async function getAll() {
    const response = await fetch(`${baseUrl}.json`);
    
    if(!response.ok){
        return await new Error(response.json());
    }

    const result = await response.json();

    return result;
}

export default{
    getAll
}