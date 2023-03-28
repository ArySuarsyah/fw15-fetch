
const container = document.getElementById("container");
const getData = fetch("https://jsonplaceholder.typicode.com/users");
const processData = async () => {
    const response = await getData;
    const data = await response.json();
    data
        .map((results) => results)
        .forEach((el) => {
            const dataBox = document.createElement("div");
            const dataName = document.createElement("div");
            const address = document.createElement("div");
            const geo = document.createElement("div");
            const spanId = document.createElement("span");
            const spanName = document.createElement("span");
            const spanUserName = document.createElement("span");
            const spanEmail = document.createElement("span");
            const spanAddress = document.createElement("span");
            const spanStreet = document.createElement("span");
            const spanCity = document.createElement("span");
            const spanSuite = document.createElement("span")
            const spanZipcode = document.createElement("span");
            const spanGeo = document.createElement("span");
            const spanLat = document.createElement("span");
            const spanLng = document.createElement("span");
            const spanPhone = document.createElement("span");
            const spanWeb = document.createElement("span");
            const spanCompany = document.createElement("span");
            const spanNameComp = document.createElement("span");
            const spanCatchPhrase = document.createElement("span");
            const spanBs = document.createElement("span");
            const valueSpanId = document.createElement("span");
            const valueSpanName = document.createElement("span");
            const valueSpanUserName = document.createElement("span");
            const valueSpanEmail = document.createElement("span");
            const valueSpanAddress = document.createElement("span");
            const valueSpanStreet = document.createElement("span");
            const valueSpanCity = document.createElement("span");
            const valueSpanSuite = document.createElement("span");
            const valueSpanZipcode = document.createElement("span");
            const valueSpanGeo = document.createElement("span");
            const valueSpanLat = document.createElement("span");
            const valueSpanLng = document.createElement("span");
            const valueSpanPhone = document.createElement("span");
            const valueSpanWeb = document.createElement("span");
            const valueSpanCompany = document.createElement("span");
            const valueSpanNameComp = document.createElement("span");
            const valueSpanCatchPhrase = document.createElement("span");
            const valueSpanBs = document.createElement("span");
            // const spanId = document.createElement('span');
            // span.id = el.id

            dataBox.className = "grid grid-cols";
            dataName.className =
                "bg-white grid grid-cols-2 border-[1px] border-black m-5";
address.className = 'flex flex-col'
            spanId.innerText = "id";
            spanName.innerText = "Name";
            spanUserName.innerText = "User Name";
            spanEmail.innerText = "Email";
            spanAddress.innerText = "Address";
            spanStreet.innerText = ` Street`;
            spanCity.innerText = 'City'
            spanSuite.innerText = 'Suite';
            spanZipcode.innerText = 'Zipcode';
            spanGeo.innerText = "Geo";
            spanLat.innerText = "Lat";
            spanLng.innerText = "Ling";
            spanPhone.innerText = "Phone";
            spanWeb.innerText = "Website";
            spanCompany.innerText = "Company";
            spanNameComp.innerText = "Name";
            spanCatchPhrase.innerText = "Catch Phrase";
            spanBs.innerText = "Bs";

            valueSpanId.innerText = `: ${el.id}`;
            valueSpanName.innerText = `: ${el.name}`;
            valueSpanUserName.innerText = `: ${el.username}`;
            valueSpanEmail.innerText = `: ${el.email}`;
            valueSpanAddress.innerText = '';
            valueSpanStreet.innerText = `: ${el.address.street}`
            valueSpanCity.innerText = `: ${el.address.city}`
            valueSpanSuite.innerText = `: ${el.address.suite}`
            valueSpanZipcode.innerText = `: ${el.address.zipcode}`;
            valueSpanGeo.innerText = ''
            valueSpanLat.innerText = `: ${el.address.geo.lat}`;
            valueSpanLng.innerText = `: ${el.address.geo.lng}`;
            valueSpanPhone.innerText = `: ${el.phone}`;
            valueSpanWeb.innerText = `: ${el.website}`;
            valueSpanCompany.innerText = '';
            valueSpanNameComp.innerText = `: ${el.company.name}`
            valueSpanCatchPhrase.innerText = `: ${el.company.catchPhrase}`;
            valueSpanBs.innerText = `: ${el.company.bs}`;

            dataName.appendChild(spanId);
            dataName.appendChild(valueSpanId);
            dataName.appendChild(spanName);
            dataName.appendChild(valueSpanName);
            dataName.appendChild(spanUserName);
            dataName.appendChild(valueSpanUserName);
            dataName.appendChild(spanEmail);
            dataName.appendChild(valueSpanEmail);
            dataName.appendChild(address);
            dataName.appendChild(valueSpanAddress);
            dataName.appendChild(spanStreet);
            dataName.appendChild(valueSpanStreet)
            dataName.appendChild(spanCity)
            dataName.appendChild(valueSpanCity)
            dataName.appendChild(spanSuite)
            dataName.appendChild(valueSpanSuite);
            dataName.appendChild(spanZipcode)
            dataName.appendChild(valueSpanZipcode)
            dataName.appendChild(geo);
            dataName.appendChild(valueSpanGeo);
            dataName.appendChild(spanLat);
            dataName.appendChild(valueSpanLat);
            dataName.appendChild(spanLng)
            dataName.appendChild(valueSpanLng)
            dataName.appendChild(spanPhone);
            dataName.appendChild(valueSpanPhone);
            dataName.appendChild(spanWeb);
            dataName.appendChild(valueSpanWeb);
            dataName.appendChild(spanCompany);
            dataName.appendChild(valueSpanCompany);
            dataName.appendChild(spanNameComp);
            dataName.appendChild(valueSpanNameComp);
            dataName.appendChild(spanCatchPhrase);
            dataName.appendChild(valueSpanCatchPhrase);
            dataName.appendChild(spanBs);
            dataName.appendChild(valueSpanBs);

            // dataName.appendChild(valueGeo);

            // geo.appendChild(valueSpanGeo);
            // geo.appendChild(spanLat);
            // geo.appendChild(spanLing);

            geo.appendChild(spanGeo);
            address.appendChild(spanAddress);

            // address.appendChild(geo)

            dataBox.appendChild(dataName);
            // dataBox.appendChild(dataValue)
            container.appendChild(dataBox);

            console.log(el.address.geo.lng);

            // const boxData = document.getElementById("boxData");

            // const id = document.getElementById("id");
            // const name = document.getElementById("name");
            // const uName = document.getElementById("uName");
            // const email = document.getElementById("email");
            // const address = document.getElementById("address");
            // const phone = document.getElementById("phone");
            // const web = document.getElementById("web");
            // const company = document.getElementById("company");

            // id.innerText = el.id;
            // name.innerText = el.name;
            // uName.innerText = el.uName;
            // email.innerText = el.email;
            // address.innerText = el.address;
            // phone.innerText = el.phone;
            // web.innerText = el.web;
            // company.innerText = el.company;
        });

    // const user = {
    //     "id": 1,
    //     "name": "Leanne Graham",
    //     "username": "Bret",
    //     "email": "Sincere@april.biz",
    //     "address": {
    //         "street": "Kulas Light",
    //         "suite": "Apt. 556",
    //         "city": "Gwenborough",
    //         "zipcode": "92998-3874",
    //         "geo": {
    //             "lat": "-37.3159",
    //             "lng": "81.1496"
    //         }
    //     },
    //     "phone": "1-770-736-8031 x56442",
    //     "website": "hildegard.org",
    //     "company": {
    //         "name": "Romaguera-Crona",
    //         "catchPhrase": "Multi-layered client-server neural-net",
    //         "bs": "harness real-time e-markets"
    //     }

    // data.forEach(el => {
    //     const
    // });
};
processData();
