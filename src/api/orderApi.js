const baseUrl = 'https://painting-shop-krasteva-default-rtdb.europe-west1.firebasedatabase.app/orders';

async function getAll() {
    const response = await fetch(`${baseUrl}.json`);
    
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

    return Object.values(result);
}

async function create(data) {
    const response = await fetch(`${baseUrl}.json`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
}

export default{
    getAll,
    getOne,
    create
}