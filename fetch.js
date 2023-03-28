
const container = document.getElementById("container");
const getData = fetch("https://jsonplaceholder.typicode.com/users");
const processData = async () => {
    const response = await getData;
    const data = await response.json();
    data
        .map((results) => results)
        .forEach((el) => {
            const dataBox = document.createElement("div");
            dataBox.innerText = `Id          : ${el.id}
            Name        : ${el.name}
            Username    : ${el.username}
            email       : ${el.email}

            address     
                street  : ${el.address.street}
                suite   : ${el.address.suite}
                city    : ${el.address.city}
                zipcode : ${el.address.zipcode}

                geo     
                    lat : ${el.address.geo.lat}
                    lng : ${el.address.geo.lng}
            phone       : ${el.phone}
            website     : ${el.website}

            company     
                name    : ${el.company.name}
                catchPhrase: ${el.company.catchPhrase}
                bs      : ${el.company.bs}
            `;
            dataBox.className = "border-[1px] border-black p-5 rounded-[10px]";          
            container.appendChild(dataBox);


        });



};
processData();
